export default function List(props) {
    return (
        <ul className="list-group">
            {props.children}
        </ul>
    )
}