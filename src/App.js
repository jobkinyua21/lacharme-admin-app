import React,{useEffect} from "react";
import { Route,Switch } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch,useSelector } from 'react-redux';
import {isUserLoggedIn,getInitialData} from './actions';
import Products from './containers/Products';
import Orders from './containers/Orders';
import Category from './containers/Category';

function App() {
  const dispatch=useDispatch();
  const auth =useSelector(state =>state.auth)

  useEffect(() =>{
    if(!auth.authenticate){
        dispatch(isUserLoggedIn());

    }
    // so tht u can add product category directly witht selecting category
    dispatch(getInitialData());

    
},[]);

  return (
    <div className="App">
      
        <Switch>
          <PrivateRoute path="/" exact component={Home}/>
          <PrivateRoute path="/category" component={Category}/>
          <PrivateRoute path="/products" component={Products}/>
          <PrivateRoute path="/orders"  component={Orders}/>


          <Route path="/Signin" component={Signin}/>
          <Route path="/Signup" component={Signup}/>

        </Switch>
      
      
      
    </div>
  );
}

export default App;
