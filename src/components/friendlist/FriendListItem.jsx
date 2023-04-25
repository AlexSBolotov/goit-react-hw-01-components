import s from './friendlist.module.css';
import PropTypes from 'prop-types';

export default function FriendListItem(props) {
  //   console.log(props);

  const { friendPic, friendName, friendStatus } = props;
  return (
    <li className={s.item}>
      <span
        className={`${s.status} ${friendStatus ? s.online : s.offline}`}
      ></span>
      <img className="avatar" src={friendPic} alt={friendName} width="48" />
      <p className="name">{friendName}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  friendPic: PropTypes.string.isRequired,
  friendName: PropTypes.string.isRequired,
  friendStatus: PropTypes.bool.isRequired,
};
