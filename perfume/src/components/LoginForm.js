import React, { useState,useEffect } from "react"
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
const LoginForm = props => {
    const { onSubmitProp,changeView } = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors,setErrors]=useState([]);

    const onSubmit = async e => {
        e.preventDefault()
        const res= await onSubmitProp({email,password});
        setErrors(res.errors);
        if(res.errors.length<=0)
            res.source.cancel();

    }
    useEffect(() => {
        
        return () => {
            
        }
    }, [])

    return(
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form onSubmit={ onSubmit } >
        <p className="h4 text-center mb-4">Sign in</p>
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
          Your email
        </label>
        <input onChange={(e)=>setEmail(e.target.value)} value ={email} type="email" id="defaultFormLoginEmailEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
          Your password
        </label>
        <input onChange={(e)=>setPassword(e.target.value)} value ={password} type="password" id="defaultFormLoginPasswordEx" className="form-control" />
        <div className="text-center mt-4">
		<a onClick={()=>changeView()}  style={{textDecoration:'underline',color:'blue'}}>create new account ?</a>
          <MDBBtn color="indigo" type="submit">Login</MDBBtn>
        </div>
      </form>
	   <p>{errors.map((err, index) => <small key={index} style={{color:"red"}}>{err}</small>)}</p>
    </MDBCol>
  </MDBRow>
</MDBContainer>


    )
}
export default LoginForm;
