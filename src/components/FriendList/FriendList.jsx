import css from './FriendList.module.css';
import FriendListItem from './FriendListItem';


const FriendList = ({ friends }) => {
  return (
    <ul className={css.container}>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;