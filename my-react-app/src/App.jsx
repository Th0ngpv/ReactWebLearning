import List from "./List";

function App() {
  const fruits = [{id: 1,name:"apple",calories:95},
                  {id: 2,name:"banana",calories:80},
                  {id: 3,name:"orange",calories:40},
                  {id: 4,name:"coconut",calories:110}
  ];
  const vegetables = [{id: 5,name:"potatoes",calories:95},
                      {id: 6,name:"celery",calories:80},
                      {id: 7,name:"carrot",calories:60},
                      {id: 8,name:"broccoli",calories:110}
  ];
  return(
    <>
      {fruits.length > 0 ? <List items={fruits} category="fruits"></List> : null}
      {vegetables.length > 0 ? <List items={vegetables} category="Vegetable"></List> : null}
    </>

  );
}

export default App
