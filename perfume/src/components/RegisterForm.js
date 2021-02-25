import React, { useState,useEffect } from "react"
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

const RegisterForm = props => {
    const { onSubmitProp,changeView } = props;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors,setErrors]=useState([]);
    const onSubmit = async e => {
        e.preventDefault()
        const res=await onSubmitProp({firstName,lastName,email,password,confirmPassword});
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
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={ onSubmit } >
                  <p className="h4 text-center py-4">Sign up</p>
                  <div className="grey-text">
                    <MDBInput onChange={(e)=>setFirstName(e.target.value)} value ={firstName}
                      label="First Name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput onChange={(e)=>setLastName(e.target.value)} value ={lastName}
                      label="Last Name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput  onChange={(e)=>setEmail(e.target.value)} value ={email}
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput onChange={(e)=>setPassword(e.target.value)} value ={password}
                      label="Password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                    <MDBInput onChange={(e)=>setConfirmPassword(e.target.value)} value ={confirmPassword}
                      label="Confirm Password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </div>
                          <a onClick={()=>changeView()}  style={{textDecoration:'underline',color:'blue'}}>have an account?</a>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="cyan" type="submit">
                      Register
                    </MDBBtn>
                  </div>
                </form>
                {errors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
};
export default RegisterForm;
