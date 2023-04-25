import s from './friendlist.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={s['stat-list']}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          friendPic={friend.avatar}
          friendName={friend.name}
          friendStatus={friend.isOnline}
        />
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
