import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';

import App from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Profile
//     username={user.username}
//     tag={user.tag}
//     location={user.location}
//     avatar={user.avatar}
//     userFollowers={user.stats.followers}
//     userViews={user.stats.views}
//     userLikes={user.stats.likes}
//   />
// );
