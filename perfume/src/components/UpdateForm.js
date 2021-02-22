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

const UpdateForm = (props) => {
    const { id } = props;
    const [name, setName] = useState(""); 
    const [company, setCompany] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [wheretobuy, setWheretoBuy] = useState("");
    const [errors, setErrors] = useState([])


    const updatePerfume = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/perfume/' + id, {
            name,
            company,
            description,
            content,
            image,
            wheretobuy
        })
            // .then(res => console.log(res));
            .then(() => navigate ("/admin"))
            .catch(err=> {
                //to show Validation messages
                const errorResponse = err.response.data.errors;
                const errorArray = [];
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
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
                <p><h3>Update Perfume&nbsp;</h3>
                    <p>
                    {errors.map((err, index) => <small key={index} style={{color:"red"}}>{err}</small>)}
                    </p>
                </p>
            </div>
            <div className="col-12">
                <center>
                <Paper elevation={3} style={styles.paper}>
                    <form onSubmit={ updatePerfume }>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Perfume Name</InputLabel>
                            <OutlinedInput type="text"onChange={(e)=>setName(e.target.value)} value={name} />
                        </FormControl>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Company</InputLabel>
                            <OutlinedInput type="text"onChange={(e)=>setCompany(e.target.value)} value={props.perfume.company} />
                        </FormControl>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Description</InputLabel>
                            <OutlinedInput type="text"onChange={(e)=>setDescription(e.target.value)} value={props.perfume.description}/>
                        </FormControl>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Perfume Content</InputLabel>
                            <OutlinedInput type="text"onChange={(e)=>setContent(e.target.value)} value={props.perfume.content} />
                        </FormControl>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Image</InputLabel>
                            <OutlinedInput type="text" onChange={(e)=>setImage(e.target.value)} value={props.perfume.image} />
                        </FormControl>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Where to Buy</InputLabel>
                            <OutlinedInput type="text" onChange={(e)=>setWheretoBuy(e.target.value)} value={props.perfume.wheretobuy} />
                        </FormControl>
                        <Button onClick={()=>navigate("/admin")} className="btn btn-secondary btn-sm">
                            Cancel
                        </Button>
                        <Button type="submit" variant="contained" color="primary" style={{marginLeft: "10px"}}>
                            Update Perfume
                        </Button>
                    </form>
                </Paper>
                </center>
            </div>
        </div>
    </div>
    )
}

export default UpdateForm
