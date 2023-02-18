

export const FriendList = ({friends}) => {

<ul>
    {friends.map(friend => {
            return(
                <li key={friend.id}>{friend.name}</li>
            )
        })
    }
</ul>

};