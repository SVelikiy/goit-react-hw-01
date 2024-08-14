import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <div>
      <ul className={css.list}>
        {friends.map((friend) => {
          return (
            <li key={friend.id}>
              <FriendListItem friends={friend} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
