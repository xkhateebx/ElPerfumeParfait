import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';

const styles = {
    paper: {
        width: "20rem", padding: "1rem"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}

const AddForm = () => {
    const [name,setName] = useState("");
    const [company,setCompany] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");

    const [errors, setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/addInfo', {
            name: name,
            company: company
            // description: description,
            // content: content,
            // image: image
        })
            .then(res=>console.log(res))
            // .then(() => navigate("/"))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArray = [];
                for (const key of Object.keys(errorResponse)) { 
                    errorArray.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArray);
            })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p><Link to="/"> Home </Link></p>
                    <p><h3>Add Form&nbsp;</h3>
                        <p>
                        {errors.map((err, index) => <small key={index} style={{color:"red"}}>{err}</small>)}
                        </p>
                    </p>
                </div>
                <div className="col-12">
                    <center>
                    <Paper elevation={3} style={styles.paper}>
                        <form onSubmit={ onSubmitHandler }>
                            <FormControl variant="outlined" style={styles.input}>
                                <InputLabel>Perfume Name</InputLabel>
                                <OutlinedInput type="text"onChange={(e)=>setName(e.target.value)}/>
                            </FormControl>
                            <FormControl variant="outlined" style={styles.input}>
                                <InputLabel>Company</InputLabel>
                                <OutlinedInput type="text"onChange={(e)=>setCompany(e.target.value)}/>
                            </FormControl>
                            <FormControl variant="outlined" style={styles.input}>
                                <InputLabel>Description</InputLabel>
                                <OutlinedInput type="text"onChange={(e)=>setDescription(e.target.value)}/>
                            </FormControl>
                            <FormControl variant="outlined" style={styles.input}>
                                <InputLabel>Perfume Content</InputLabel>
                                <OutlinedInput type="text"onChange={(e)=>setContent(e.target.value)}/>
                            </FormControl>
                            <FormControl variant="outlined" style={styles.input}>
                                <InputLabel>Image</InputLabel>
                                <OutlinedInput type="text"onChange={(e)=>setImage(e.target.value)}/>
                            </FormControl>
                            <Button onClick={()=>navigate("/")} className="btn btn-secondary btn-sm">
                                Cancel
                            </Button>
                            <Button type="submit" variant="contained" color="primary" style={{marginLeft: "10px"}}>
                                Submit
                            </Button>
                        </form>
                    </Paper>
                    </center>
                </div>
                <div className="col-12">

                </div>
            </div>
        </div>
    )
}

export default AddForm;
