import {useState} from 'react';

const MyComponent = () => {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("SpongeBob");
    }
    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }
    
    return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>increase Age</button>

      <p>Age: {isEmployed ? "yes" : "no"}</p>
      <button onClick={toggleEmployedStatus}>Toggle Status</button>

    </div>
    );
}

export default MyComponent;
