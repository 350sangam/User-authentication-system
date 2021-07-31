import React,{useState} from "react";
import './App.css';
import Axios from "axios";
import Dashboard from "./components/dashboard"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";

function App() {
  const   [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [Data ,setData] = useState("")
    const login = () => {
        Axios({
          method: "POST",
          data: {
            username: loginUsername,
            password: loginPassword,
          },
          withCredentials: true,
          url: "http://localhost:4000/login",
        }).then((res) => console.log(res))
      };
      const getUser = () => {
        Axios({
          method: "GET",
          withCredentials: true,
          url: "http://localhost:4000/user",
        }).then((res) => {
          setData(res.data);
          console.log(res.data);
        });
      };
      
  return (<Router>
    <div className="App">
        <div className="container">
          <div className="topnav">
            <li >             
              <Link to={"/"}>Login</Link>
              </li>
              <li >
              <Link to={"/sign-up"}>Sign up</Link>
            </li>
          </div>
        </div>
      

      <div className="auth-wrapper">
        <div className="auth-inner">
        
          <Switch>
            <Route exact path='/' render ={props =><Login 
            login = {login} 
            setLoginPassword={setLoginPassword}
            setLoginUsername={setLoginUsername}
            />}/>
            <Route path="/sign-up" component={SignUp} />
            <Route path="/dashboard"  render ={props =><Dashboard 
            Data={Data}  
            getUser={getUser}/>}/>
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
