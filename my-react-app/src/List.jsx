
function List(){
    const fruits = [{id: 1,name:"apple",calories:95},
                    {id: 2,name:"banana",calories:80},
                    {id: 3,name:"orange",calories:40},
                    {id: 4,name:"coconut",calories:110}
    ];

    // //some popular type of sorting an array
    // fruits.sort((a,b) => a.name.localeCompare(b.name)); //alphabetical order
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); //reverse alphabetical order
    // fruits.sort((a,b) => a.calories - b.calories); //ascending order
    // fruits.sort((a,b) => b.calories - a.calories); //descending order
    // //filter an array
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    const listItems = fruits.map(fruit => 
    <li key={fruit.id}>
        {fruit.name}: &nbsp;
        <b>{fruit.calories}</b>
    </li>);

    return (<ul>{listItems}</ul>);
}

export default List