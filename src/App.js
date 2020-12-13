
import React ,{useState,useEffect}from "react"
import {BrowserRouter as Router,Switch,Route}from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import Login from './Login'
import './App.css'
import Checkout from "./Checkout"
import {auth} from './firebase'
import {useStateValue} from './StateProvider'
import Payment from './Payment'

const App=()=>{

  const [{},dispatch]= useStateValue()
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      console.log("user is login")
      if(user){
           dispatch({
             type:'SET_USER',
             user:user
           })
      }
      else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])

    return(<> 
    <Router>
    <div className="app">
      <Switch>
      <Route path="/checkout" >
      <Header/>
      <Checkout/>
      </Route>
      <Route path="/login">
       <Login/>
      </Route>
      <Route  exact path="/">

      <Header/>
      <Home/>
      </Route>
      <Route path="/payment">

<Header/>
<Payment/>
</Route>
      </Switch>
      </div>
      </Router>
        </>
    )
}
export default App

 