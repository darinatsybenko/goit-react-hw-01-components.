export const Stats = ({stat: {stats}}) => {
    return(
    <ul>
        <li>
            <span>followers</span>
            <span>{stats.followers}</span>
        </li>
        <li>
      <span>views</span>
      <span>{stats.viws}</span>
    </li>
    <li>
      <span>likes</span>
      <span>{stats.likes}</span>
    </li>
    </ul>
    );
    }