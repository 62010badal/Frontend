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
    path: "/Checkout",
    element: <Protected><Checkout></Checkout></Protected>,
  },
  {
    path: "/product-detail/:id",
    element: <Protected><ProductDetailPage></ProductDetailPage></Protected>,
  },
]);



function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

useEffect(()=> {
  if(user){
    dispatch(fetchItemsByUserIdAsync(user.id));
  } 
}, [dispatch, user]);

  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
