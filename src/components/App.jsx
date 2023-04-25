import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendlist/FriendList';
import TransactionHistory from './transactionhistory/TransactionHistory';

import friends from '../data/friends.json';
import stats from '../data/stats.json';
import user from '../data/user.json';
import transactions from '../data/transactions.json';

export default function App() {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        paddingTop: '20px',
        paddingBottom: '20px',
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
      <Statistics title="Statistics" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
