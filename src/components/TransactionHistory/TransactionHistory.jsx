import css from "./TransactionHistory.module.css";

export default function TransactionsHistory({ items }) {
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
        {items.map((item) => {
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
