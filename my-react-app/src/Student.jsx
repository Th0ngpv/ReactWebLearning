//propTypes = a datatype checker
//defaultProp = a default value for props
import  propTypes  from "prop-types";

Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

function Student(props) {
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "yes" : "No"}</p>
        </div>
    );
}

export default Student;