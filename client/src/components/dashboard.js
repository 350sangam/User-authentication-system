import React from 'react';
const Dashboard = ({getUser, Data}) => {
 
  return (
        <div>
            <div>
            </div>
            <h1>Welcome {Data.username}</h1>
            <div>
            </div>
            <button type="submit" onClick={getUser} >get user</button>
        </div>
    )
}

export default Dashboard
