import Student from "./Student";

function App() {
  return(
    <>
      <Student name="Sponge Bob" age="30" isStudent = {true}></Student>
      <Student name="Who" age={21} isStudent = {false}></Student>
      <Student name="He" age={30} isStudent = {false}></Student>
      <Student></Student>
    </>
  );
}

export default App
