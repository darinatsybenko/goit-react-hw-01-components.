

export const Statistics = ({stats}) => {
return(
<section>
<h2 class="title">Upload stats</h2>
{stats.map(stat => {
    return(
        <li key={stat.id}>
            <span>{stat.label}</span>
            <span>{stat.percentage}</span>
        </li>
    )
})}
</section>
);
}