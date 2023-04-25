import s from './transactions.module.css';
import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem';

export default function TransactionHistory({ transactions }) {
  return (
    <table className={s['transaction-history']}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction, idx) => (
          <TransactionHistoryItem
            // className={idx % 2 === 0 ? s.first : s.second}
            key={transaction.id}
            transType={transaction.type}
            transAmount={transaction.amount}
            transCurrency={transaction.currency}
          />
        ))}
      </tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};
