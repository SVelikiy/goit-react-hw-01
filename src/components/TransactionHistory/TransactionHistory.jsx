import transactions from "../../transactions.json";
import css from "./TransactionHistory.module.css";

export default function Transactions({
  transaction: { type, amount, currency },
}) {
  return (
    <table className={css.box}>
      <thead>
        <tr>
          <th className={css.boxHeader}>Type</th>
          <th className={css.boxHeader}>Amount</th>
          <th className={css.boxHeader}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((item) => {
          return (
            <tr className={css.list} key={item.id}>
              <td className={css.items}>{item.type}</td>
              <td className={css.items}>{item.amount}</td>
              <td className={css.items}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
