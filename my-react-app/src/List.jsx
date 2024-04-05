import propTypes from "prop-types";

List.propTypes = {
    items: propTypes.arrayOf(propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
        calories: propTypes.number
    })),
    category: propTypes.string
};
List.defaultProps = {
    category: "Category",
    items: [{id: 0,name:"There is no array", calories:0}]
}

function List(props){
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
                                                {item.name}: &nbsp;
                                                <b>{item.calories}</b>
                                            </li>);

    return (
    <>
    <h3 className="list-category">{props.category}</h3>
    <ul className="list-items">{listItems}</ul>
    </>);
}

export default List