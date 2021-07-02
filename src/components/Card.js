import './Card.css';

function Card(props)
{
    // Whitespace is needed for strinf manipulation. I forgot.
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default Card;