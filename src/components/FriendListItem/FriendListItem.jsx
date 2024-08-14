import css from "./FriendListItem.module.css";

export default function FriendListItem({
  friends: { avatar, name, isOnline },
}) {
  return (
    <div className={css.item}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      {isOnline ? (
        <p className={css.isOnline}>online</p>
      ) : (
        <p className={css.isOffline}>offline</p>
      )}
    </div>
  );
}
