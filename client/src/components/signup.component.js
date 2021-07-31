import React, { useState } from "react";
import Axios from "axios";

const SignUp = () => {
const [registerUsername, setRegisterUsername] = useState("");
const [registerPassword, setRegisterPassword] = useState("");
const register = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/register",
    }).then((res) => console.log(res));
  };
        return (
            <form>
                <h3>Sign Up</h3>
                <div >
                    <label>First name</label>
                    <input type="text"  placeholder="Last name" />
                </div>
                <div>
                    <label>Last name</label>
                    <input type="text" placeholder="Last name" />
                </div>

                <div>
                    <label>Email address</label>
                    <input type="email" placeholder="Enter email" onChange={(e) => setRegisterUsername(e.target.value)} />
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" onChange={(e) => setRegisterPassword(e.target.value)} />
                </div>

                <button type="submit"  onClick={register}>Sign Up</button>
            </form>
        );
    }
export default SignUp;
