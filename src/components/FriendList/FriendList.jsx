import friendList from "../../friends.json";
import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css"

export default function FriendList() {
  return (
    <div>
      <ul className={css.list}>
        {friendList.map((friend) => {
          return (
            <li key={friend.id}>
              <FriendListItem friendlist={friend} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
