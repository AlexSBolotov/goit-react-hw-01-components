import defaultImage from './default-image.jpg';
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
    <div class="profile">
      <div class="description">
        <img src={avatar} alt="User avatar" class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{userFollowers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{userViews}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{userLikes}</span>
        </li>
      </ul>
    </div>
  );
}
