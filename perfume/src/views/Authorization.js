import React from 'react'
import axios from 'axios';

const Authorization = (props) => {
    const {user ,clearUser} =props;
    const logout =()=>{
        axios.get("http://localhost:8000/api/logout")
        .then(()=>{
            clearUser();
        })
        .catch(err=>console.log(err))

    }
    return (
        <>
        <h1>welcome {user.firstName} {user.lastName}</h1>
        <button onClick={e=>logout()}>log out</button>
        </>
    )
}

export default Authorization