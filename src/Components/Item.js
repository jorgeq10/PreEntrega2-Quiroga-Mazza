export default function Item({item}) {
    return <div>
        <h1>nombre producto: {item.name}</h1>
        <h5>stock: {item.count}</h5>
        <p>descrip: {item.description}</p>
    </div>
}