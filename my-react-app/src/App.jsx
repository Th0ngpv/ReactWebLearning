//React hook = functions that allow functional components to use 
//             React feature without writing class components 
//             (useState, useEffect, useContent, useCallback)
//              usually begin the the phrase use

//useState() = a React hook that create a stateful variable and 
//             a setter function to update its value in the virtual DOM
//             [name, setName]
import Counter from './Counter'

function App() {
  return(
    <Counter></Counter>
  );
}

export default App
