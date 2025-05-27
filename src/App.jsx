import Profile from './components/Profile/Profile.jsx';
import userData from './userData.json';
import friends from './friends.json';
import FriendList from './components/FriendList/FriendList.jsx'; 
import transactions from './transaction.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';

const App = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '40px', padding: '40px' }}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;