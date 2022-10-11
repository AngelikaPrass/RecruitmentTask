import {useContext} from "react";
import {UserContext} from "../App";

const Logout = () => {
    const context = useContext(UserContext);

    if (context!.currentUser == null) {
        return (<> </>);
    } else return (

        <button
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-sky-900 hover:bg-white mt-4 lg:mt-0"
            onClick={() => {
                context!.setCurrentUser(null);
                localStorage.setItem("user", JSON.stringify(null));
                alert("Logged out");
            }}>Logout</button>
    )
}

export default Logout;
