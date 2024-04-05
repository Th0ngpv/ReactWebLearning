// HOW TO STYLE REACT COMPONENTS WITH CSS
// ------------------------------------
// 1. external
// 2. modules
// 3. inline

//module styling
import stylesModule from './Button.module.css';

//inline styling
    const styles =  {
        backgroundColor: "#08155e",
        color: "white",
        borderRadius: "20px",
        cursor: "pointer"
    }

function Button() {
    // modules styling
    // return (
    //     <button className={stylesModule.button}>Click me</button>
    // );
    return (
        <button style={styles}>Click Me</button>
    );

}

export default Button;