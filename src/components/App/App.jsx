import Profile from "../Profile/Profile";
import userData from "../../userData.json";
import friends from "../../friends.json";
import FriendList from "../FriendList/FriendList";
import transactions from "../../transactions.json";
import TransactionsHistory from "../TransactionHistory/TransactionHistory.jsx";

export default function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionsHistory items={transactions} />
    </div>
  );
}
