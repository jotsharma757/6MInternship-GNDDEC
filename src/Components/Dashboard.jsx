import React from "react";

function Dashboard({setIsLoggedIn}){
    return(
    <div>
        <h2>Dashboard</h2>
        <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
    </div>
    )
}
export default Dashboard;