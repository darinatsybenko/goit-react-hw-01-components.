

export const FriendList = ({friends}) => {
return (
<ul>
    {friends.map(friend => {
            return(
                <li key={friend.id}>{friend.name}</li>
            )
        })
    }
</ul>
)
};