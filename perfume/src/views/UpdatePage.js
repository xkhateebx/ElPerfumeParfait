import React, { useEffect, useState } from 'react';
import UpdateForm from '../components/UpdateForm';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import PerfumeUpdate from '../components/PerfumeUpdate';

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

export default (props) => {
    // const { id } = props;
    const [perfume, setPerfume] = useState();
    const [loaded, setLoaded] = useState(false);

    //Update
    const { id } = props;
    const [name, setName] = useState(""); 
    const [company, setCompany] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [wheretobuy, setWheretoBuy] = useState("");
    const [wheretobuy2, setWheretoBuy2] = useState("");

    const [errors, setErrors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/perfume/' + id)
            .then(res => {
                // setPerfume(res.data);
                setName(res.data.name);
                setCompany(res.data.company);
                setContent(res.data.content);
                setDescription(res.data.description);
                setImage(res.data.image);
                setWheretoBuy(res.data.wheretobuy);
                setWheretoBuy2(res.data.wheretobuy2);
                setLoaded(true);
            })
    }, [])
    const updatePerfume = perfume => {
        perfume.preventDefault();
        axios.put('http://localhost:8000/api/perfume/' + id, {
            name,
            company,
            description,
            content,
            image,
            wheretobuy,
            wheretobuy2
        })
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
                            <OutlinedInput type="text"onChange={(e)=>setCompany(e.target.value)} value={company} />
                        </FormControl>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Description</InputLabel>
                            <OutlinedInput type="text"onChange={(e)=>setDescription(e.target.value)} value={description}/>
                        </FormControl>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Perfume Content</InputLabel>
                            <OutlinedInput type="text"onChange={(e)=>setContent(e.target.value)} value={content} />
                        </FormControl>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Image</InputLabel>
                            <OutlinedInput type="text" onChange={(e)=>setImage(e.target.value)} value={image} />
                        </FormControl>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Where to Buy</InputLabel>
                            <OutlinedInput type="text" onChange={(e)=>setWheretoBuy(e.target.value)} value={wheretobuy} />
                        </FormControl>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Where to Buy (Option 2)</InputLabel>
                            <OutlinedInput type="text" onChange={(e)=>setWheretoBuy2(e.target.value)} value={wheretobuy2} />
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



// return (
//     <div>
//         <p><Link to="/home"> Home </Link></p>
//         {/* {loaded && (<UpdateForm onSubmitProp={updatePerfume} perfume={perfume}/> )} */}

//         {/* For Test Admin Page  */}
//         {/* {loaded && (
//         <UpdateForm 
//             onSubmitProp={updatePerfume}
//             initialName={props.perfume.name}
//             initialCompany={props.perfume.company}
//             initialDescription={props.perfume.description}
//             initialContent={props.perfume.content}
//             initialImage={props.perfume.image}
//             initialWheretoBuy={props.perfume.wheretobuy}
//         />
//     )} */}
//     </div>
// )

