import Navbar from "../features/navbar/Navbar";
import UserOrders from '../features/user/components/UserOrders'

function UserOrdersPage(){
    return(
       <div>
            <Navbar>
            <h1 className="mx-auto text-2xl">My orders</h1>
                <UserOrders></UserOrders>
            </Navbar>
        </div> 
    );
}

export default UserOrdersPage;

