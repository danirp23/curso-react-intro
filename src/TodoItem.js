function TodoItem(props) {
    return (
        <li>
            <span>v</span>
            <p>{props.text}</p>
            <span></span>
        </li>
    );
}

export { TodoItem };