import React,{useState,useEffect}  from 'react'
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm'
import axios from 'axios';
const source = axios.CancelToken.source();

const Authentication = (props) => {
    const {authenticateUser}=props;
    const   [viewRegisterForm, setViewRegisterForm]  = useState(true);
    useEffect(() => {

    }, [viewRegisterForm])

    const changeView=()=>{
        setViewRegisterForm(!viewRegisterForm);
    }
    const registerUser = async user =>{
        const errorArr = [];
        await axios.post("http://localhost:8000/api/register",user,{withCredentials:true,cancelToken:source.token})
            .then((response) => authenticateUser(response.data.user))
            .catch(err =>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
            })
        return {errors:errorArr,source:source};
    }
    const loginUser =  async (user) =>{
        const errorArr = [];
        await axios.post("http://localhost:8000/api/login",user,{withCredentials:true,cancelToken:source.token})
            .then((response) => authenticateUser(response.data.user))
            .catch(err =>{
                try{
                    const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                    for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                        errorArr.push(errorResponse[key].message)
                    }
    
                }catch(e){
                    console.log(e);
                }
            })
        return {errors:errorArr,source:source};
    }


    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            {viewRegisterForm&&<RegisterForm onSubmitProp={registerUser} changeView={changeView} />}
            {!viewRegisterForm&&<LoginForm onSubmitProp={loginUser} changeView={changeView} />} 
        </div>

    )
}

export default Authentication