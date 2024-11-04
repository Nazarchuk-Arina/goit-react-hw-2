import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css";
const FriendList = ({ friends }) => {
  return (
    <div>
      <h2>Friend list</h2>
      <ul className={s.friends__list}>
        {friends.map((friend) => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
