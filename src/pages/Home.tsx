import {useContext} from "react";
import {UserContext} from "../App";

const Home = () => {
    const userContext = useContext(UserContext);

    return (
        <div className="grid place-items-center mt-1">
            {userContext!.currentUser == null ? (<></>) : (<div> Welcome, {userContext!.currentUser!.name} </div>)}


        </div>
    )
}

export default Home;
