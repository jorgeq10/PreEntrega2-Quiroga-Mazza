import Item from "./Item"

export default function ItemListContainer(props) {
    return <div>
        {props.greeting &&
            props.greeting.map((item) => {
                return <Item key={item.id} item={item} />
            })}
    </div>
}