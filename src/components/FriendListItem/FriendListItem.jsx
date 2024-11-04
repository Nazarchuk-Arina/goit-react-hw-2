import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <li className={s.friends__item}>
        <img className={s.friends__image} src={avatar} alt={name} width="48" />
        <p className={s.friends__name}>{name}</p>
        {isOnline === true ? (
          <p className={s.friends__online}>Online</p>
        ) : (
          <p className={s.friends__offline}>Offline</p>
        )}
      </li>
    </>
  );
};

export default FriendListItem;
