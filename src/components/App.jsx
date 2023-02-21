import friends from '../friends.json'
import user from '../user.json';
import data from '../data.json';
import { Profilecard } from './Profilecard';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profilecard items={user}/>
    <Statistics stats={data}/>
    <FriendList friends={friends}/>
    </div>
  );
};
