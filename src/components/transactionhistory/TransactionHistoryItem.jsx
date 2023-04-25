// import s from './transactions.module.css';
import PropTypes from 'prop-types';

export default function TransactionHistoryItem(props) {
  //   console.log(props);

  const { transType, transAmount, transCurrency } = props;
  return (
    <tr>
      <td>{transType}</td>
      <td>{transAmount}</td>
      <td>{transCurrency}</td>
    </tr>
  );
}
TransactionHistoryItem.propTypes = {
  transType: PropTypes.string.isRequired,
  transAmount: PropTypes.string.isRequired,
  transCurrency: PropTypes.string.isRequired,
};
