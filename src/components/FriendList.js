import { FriendListItem } from "./FriendListItem";


export const FriendList = ({friends}) => {
    
<ul>
    {friends.map(friend => (
<li key={friend.id}>
<FriendListItem friend={friend} />
</li>
    ))};
</ul>
    
};