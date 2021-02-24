import React, { useState,useEffect } from "react"
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import '../components/style.css';
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
      <Box component="div" className="reg-form-bg">
      <Box component="div" className="reg-form-overlay">
        <Container maxWidth="sm" className="reg-form py-5">

          <form
            noValidate
            autoComplete="off"
            className="w-75 mx-auto py-5"
            onSubmit={ onSubmit }
          >
            <h3 className="font-weight-bold mb-4">Sign Up</h3>
            <FormGroup className="mb-4">
              <TextField id="firstName" label="First Name" onChange={(e)=>setFirstName(e.target.value)} value ={firstName} />
            </FormGroup>
            <FormGroup className="mb-4">
              <TextField id="lastName" label="Last Name" onChange={(e)=>setLastName(e.target.value)} value ={lastName} />
            </FormGroup>
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
            <FormGroup className="mb-4">
              <TextField
                type="password"
                id="password"
                label="Confirm Password"
                onChange={(e)=>setConfirmPassword(e.target.value)} value ={confirmPassword}
              />
            </FormGroup>
            <Box component="div" className="mb-5">
              <span className="text-muted"><a onClick={()=>changeView()}  style={{textDecoration:'underline',color:'blue'}}>have an account?</a> </span>
            </Box>
            <Box component="div" className="text-right">
              <center>
              <Button type="submit" variant="outlined" color="secondary" className="px-5 py-2">
                Register
              </Button>
              </center>
            </Box>
          </form>
		  {errors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
        </Container>
      </Box>
    </Box>

    );
};
export default RegisterForm;
