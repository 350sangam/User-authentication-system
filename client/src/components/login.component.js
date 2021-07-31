import React from "react";
import {BrowserRouter as Router, useHistory} from "react-router-dom";
const Login = ({login,setLoginUsername,setLoginPassword}) => {
     
  
      const history = useHistory();
      const callFunction = () => {
        login();       
        history.push("/dashboard")
      }
        return (<Router>
            <div>
                <h3>Sign In</h3>

                <div>
                    <label>Email address</label>
                    <input type="email"  placeholder="Enter email" onChange={(e) => setLoginUsername(e.target.value)}/>
                </div>

                <div>
                    <label> Password </label>
                    <input type="password" placeholder="Enter password" onChange={(e) => setLoginPassword(e.target.value)}/>
                </div>

                <div>
                    <div>
                        <input type="checkbox"/>
                        <label>Remember me</label>
                    </div>
                </div>
                <button type="submit" onClick={callFunction} >Submit</button>
                <p>
                Forgot password?
                </p>
            </div>
            </Router>
        );
    }

export default Login;

