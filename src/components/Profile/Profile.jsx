import s from "./Profile.module.css";

const Profile = ({ user }) => {
  return (
    <div className={s.card}>
      <div>
        <img className={s.card__image} src={user.avatar} alt={user.username} />
        <p className={s.card__name}>{user.username}</p>
        <p>@{user.tag}</p>
        <p>{user.location}</p>
      </div>

      <ul className={s.card__tags__list}>
        <li className={s.card__tags__item}>
          <span>Followers</span>
          <span className={s.card__tag}>{user.stats.followers}</span>
        </li>
        <li className={s.card__tags__item}>
          <span>Views</span>
          <span className={s.card__tag}>{user.stats.views}</span>
        </li>
        <li className={s.card__tags__item}>
          <span>Likes</span>
          <span className={s.card__tag}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
