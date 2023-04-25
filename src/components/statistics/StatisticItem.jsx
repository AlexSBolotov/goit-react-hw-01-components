import s from './statistics.module.css';
import PropTypes from 'prop-types';

export default function StatisticItem(stats) {
  console.log(stats);

  const { statLabel, statPers } = stats;
  console.log(s[statLabel.slice(1)]);
  return (
    <li className={`${s.item} ${s[statLabel.slice(1)]}`}>
      <span className={s.label}>{statLabel}</span>
      <span className={s.percentage}>{statPers}%</span>
    </li>
  );
}
StatisticItem.propTypes = {
  statLabel: PropTypes.string.isRequired,
  statPers: PropTypes.number.isRequired,
};
// style={{ backgroundColor: color }}
