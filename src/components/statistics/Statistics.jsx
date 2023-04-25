import s from './statistics.module.css';
import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';

export default function Statistics({ title, stats }) {
  console.log(title);
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s['stat-list']}>
        {stats.map(stat => (
          <StatisticItem
            // style={{ backgroundColor: 'red' }}
            key={stat.id}
            statLabel={stat.label}
            statPers={stat.percentage}
            // color="red"
          />
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};
