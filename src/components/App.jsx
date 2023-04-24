import Profile from './Profile';
import user from '../user.json';

export default function App() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        userFollowers={user.stats.followers}
        userViews={user.stats.views}
        userLikes={user.stats.likes}
      />
    </div>
  );
}
