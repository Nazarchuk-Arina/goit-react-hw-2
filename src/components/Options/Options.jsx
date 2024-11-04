const Options = ({ feedback, setFeedback, totalFeedback }) => {
  const handleClickByOption = (value) => {
    setFeedback((prev) => ({
      ...prev,
      [value]: prev[value] + 1,
    }));
  };

  const handleReset = () => {
    const initialFeedback = Object.keys(feedback).reduce((acc, option) => {
      acc[option] = 0;
      return acc;
    }, {});

    setFeedback(initialFeedback);
  };

  return (
    <section>
      {Object.keys(feedback).map((option) => (
        <button
          key={option}
          onClick={() => {
            handleClickByOption(option);
          }}
        >
          {option}
        </button>
      ))}
      {totalFeedback !== 0 && (
        <button
          onClick={() => {
            handleReset();
          }}
        >
          Reset
        </button>
      )}
    </section>
  );
};

export default Options;
