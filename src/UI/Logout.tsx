import {useContext} from "react";
import {UserContext} from "../App";

const Logout = () => {
    const context = useContext(UserContext);

    if (context!.currentUser == null) {
        return (<> </>);
    } else return (
        <button onClick={() => {
            context!.setCurrentUser(null);
            localStorage.setItem("user", JSON.stringify(null));
            alert("Logged out");
        }}>Logout</button>
    )
}

export default Logout;
