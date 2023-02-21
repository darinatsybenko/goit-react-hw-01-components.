

export const FriendListItem = ({friend: {name, avatar, isOnline}}) => {
<div>
<span>{name}</span>
  <img src={avatar} alt={name} width="48" />
  <p>{isOnline}</p>
</div>
}
