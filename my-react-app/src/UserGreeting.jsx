//conditional rendering = allow us to control which will
//                        be render base on certain conditions
import propTypes from "prop-types";

UserGreeting.propTypes = {
  isLoggedIn: propTypes.bool,
  userName: propTypes.string,
};
UserGreeting.defaultProps = {
  isLoggedIn: false,
  userName: "Guest"
}
function UserGreeting(props) {
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {props.userName}</h2>
  );
  const loginPrompt = <h2 className="login-prompt">Please log in</h2>;
  return (props.isLoggedIn ? welcomeMessage : loginPrompt);
}

export default UserGreeting;
