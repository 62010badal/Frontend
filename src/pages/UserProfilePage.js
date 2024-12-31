import Navbar from "../features/navbar/Navbar";
import UserProfile from "../features/user/components/UserProfile";


function UserProfilePage(){
    return(
        <Navbar>
            <h1 className="mx-auto text-2xl">My orders</h1>
                <UserProfile></UserProfile>
            </Navbar>
    )
}

export default UserProfilePage;