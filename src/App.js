import React, { useEffect } from 'react';
import './App.css';
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Home from './pages/Home'
import CartPage from './pages/CartPage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage';
import Protected from './features/auth/components/Protected';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/auth/authSlice';
import PageNotFound from './pages/404'
import OrderSuccessPage from './pages/OrderSuccessPage';
import UserOrdersPage from './pages/UserOrderPage';
import UserProfilePage from './pages/UserProfilePage';
import { fetchLoggedInUser } from './features/user/userAPI';
import { fetchLoggedInUserAsync } from './features/user/userSlice';
import Logout from './features/auth/components/Logout';
import ForgotPasswordPage from './pages/ForgotPasswordPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected>
      <Home></Home>
      </Protected>
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>
  },
  {
    path: "/cart",
    element: <Protected>
      <CartPage></CartPage>
      </Protected>,
  },
  {
    path: "/checkout",
    element: <Protected><Checkout></Checkout></Protected>,
  },
  {
    path: "/product-detail/:id",
    element: <Protected><ProductDetailPage></ProductDetailPage></Protected>,
  },
  {
    path: "/order-success/:id",
    element: 
      <OrderSuccessPage></OrderSuccessPage>
  },
  {
    path: "/orders",
    element:
        <UserOrdersPage></UserOrdersPage> 
        },
  {
    path: "/profile",
    element: 
      <UserProfilePage></UserProfilePage>
  },
  {
    path: "/logout",
    element: 
      <Logout></Logout>
  },
  {
    path: "/forgot-password",
    element: 
      <ForgotPasswordPage></ForgotPasswordPage>
  },
  {
    path: "*",
    element: 
      <PageNotFound></PageNotFound>
  },
]);



function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

useEffect(()=> {
  if(user?.id){
    dispatch(fetchItemsByUserIdAsync(user.id));
    dispatch(fetchLoggedInUserAsync(user.id));
  } 
}, [dispatch, user]);

  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
