import React from "react";
import { useSelector } from "react-redux";

const User = () => {
    
    const token = useSelector((state) => state.user.token);

    return (
        <>
           
                <div>
                    <h1>USER Info</h1>
                    <p>{token}</p>
                    
                </div>
        
        </>
    );
}

export default User;