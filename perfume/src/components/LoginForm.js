import React, { useState,useEffect } from "react"
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import '../components/style.css';

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
      <Box component="div" className="login-form-bg">
      <Box component="div" className="login-form-overlay">
        <Container maxWidth="sm" className="login-form py-5">

          <form
            noValidate
            autoComplete="off"
            className="w-75 mx-auto py-5"
            onSubmit={ onSubmit }
          >
            <h3 className="font-weight-bold mb-4">Sign In</h3>
            <FormGroup className="mb-4">
              <TextField id="email" label="Email" onChange={(e)=>setEmail(e.target.value)} value ={email} />
            </FormGroup>
            <FormGroup className="mb-4">
              <TextField
                type="password"
                id="password"
                label="Password"
                onChange={(e)=>setPassword(e.target.value)} value ={password}
              />
            </FormGroup>
            <Box component="div" className="mb-5">
              <span className="text-muted"><a onClick={()=>changeView()}  style={{textDecoration:'underline',color:'blue'}}>create new account ?</a> </span>
            </Box>
            <Box component="div" className="text-right">
              <center>
              <Button type="submit" variant="outlined" color="secondary" className="px-5 py-2">
                Login
              </Button>
              </center>
            </Box>
          </form>
		  	   <p>{errors.map((err, index) => <small key={index} style={{color:"red"}}>{err}</small>)}</p>

        </Container>
      </Box>
    </Box>


    )
}
export default LoginForm;
