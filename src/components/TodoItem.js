const TodoItem = (props) => {
    console.log(props)
    return (
        <li style={{ background: props.bg ? 'lightblue' : 'none' }}>
            <img src={props.imgBefore} alt="" />
            <span style={{ textDecoration: props.textDecoration }}>{props.todo} </span>
            <img src={props.imgAfter} alt="" />
        </li>
    );
}

export default TodoItem;