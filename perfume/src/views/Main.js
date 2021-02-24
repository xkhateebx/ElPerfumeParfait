import React,{lazy, useEffect, useState} from 'react'
import Authentication from './Authentication';
import axios from 'axios';
import Authorization from './Authorization';
axios.defaults.withCredentials=true;


export const Main = (props) => {

    const   [user, setUser]  = useState({_id:false,not_loaded:true});
    
    const loadUser=async ()=>{
        return  await axios.get("http://localhost:8000/api/user",{withCredentials:true})
        .then( (response)=>(response.data))
        .catch(err=>({_id:false}))
    }
    useEffect(async() => {
        await setUser(await loadUser());
    }, [])
    if(user.not_loaded)
        return <div>loading</div>
    return !user._id? (
            <Authentication authenticateUser={(user)=>setUser(user)}/>
    )
    :(
        <Authorization user={user} clearUser={()=>setUser({_id:false})}/>
    )
}
export default Main;
