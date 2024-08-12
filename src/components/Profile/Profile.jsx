import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.card}>
      <div className={css.userContainer}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.userList}>
        <li className={css.userItem}>
          <span className={css.userItemTitle}>Followers</span>
          <span className={css.userItemValue}>{[stats.followers]}</span>
        </li>
        <li className={css.userItem}>
          <span className={css.userItemTitle}>Views</span>
          <span className={css.userItemValue}>{[stats.views]}</span>
        </li>
        <li className={css.userItem}>
          <span className={css.userItemTitle}>Likes</span>
          <span className={css.userItemValue}>{[stats.likes]}</span>
        </li>
      </ul>
    </div>
  );
}
