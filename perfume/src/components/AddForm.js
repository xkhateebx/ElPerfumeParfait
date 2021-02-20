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
    const [wheretobuy, setWheretoBuy] = useState("");

    const [errors, setErrors] = useState([]);


    //Get All PErfumes
    const [perfumes, setPerfumes] = useState([])
    
    useEffect( () => {
        axios.get('http://localhost:8000/api/allPerfumes')
            .then(response => setPerfumes((response.data)))
            .catch(error => console.log("There was an issue: ", error))
    },[])
    //////////

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/addInfo', {
            name: name,
            company: company,
            description: description,
            content: content,
            image: image,
            wheretobuy: wheretobuy
        })
            .then(res=>console.log(res))
            .then(() => navigate("/"))
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
                                <OutlinedInput type="text"onChange={(e)=>setName(e.target.value)} value={name} placeholder="name"/>
                            </FormControl>
                            <FormControl variant="outlined" style={styles.input}>
                                <InputLabel>Company</InputLabel>
                                <OutlinedInput type="text"onChange={(e)=>setCompany(e.target.value)} value={company} placeholder="company"/>
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
                                <OutlinedInput type="text" onChange={(e)=>setImage(e.target.value)} value={image} />
                            </FormControl>
                            <FormControl variant="outlined" style={styles.input}>
                                <InputLabel>Where to Buy</InputLabel>
                                <OutlinedInput type="text" onChange={(e)=>setWheretoBuy(e.target.value)} value={wheretobuy} />
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
                {perfumes.length > 0 && perfumes.map((item,index)=>
                {
                    return(
                        <div key={index}>
                            <p>{item._id}</p>
                            <p>{item.name}</p>
                            <p>{item.company}</p>
                            <p>{item.description}</p>
                            <p>{item.content}</p>
                            <p><img src={`../images/${item.image}.jpg`} alt={item.image} height="300px" width="300px"/></p> 
                        </div>
                    )
                }
                                                )
                }
                </div> 
            </div>
        </div>
    )
}

export default AddForm;
