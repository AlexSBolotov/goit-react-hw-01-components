import s from './profile.module.css';
import PropTypes from 'prop-types';
import defaultImage from '../../images/default-image.jpg';
export default function Profile(props) {
  //   console.log(props);
  const {
    username,
    tag,
    location,
    avatar = defaultImage,
    userFollowers,
    userViews,
    userLikes,
  } = props;
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={username} className={s.avatar} />
        <p>{username}</p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.item}>
          <span className={s.label}>Followers</span>
          <span>{userFollowers}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Views</span>
          <span>{userViews}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Likes</span>
          <span>{userLikes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  userFollowers: PropTypes.number.isRequired,
  userViews: PropTypes.number.isRequired,
  userLikes: PropTypes.number.isRequired,
};
