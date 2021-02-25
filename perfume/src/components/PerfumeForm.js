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


export default props => {
    const { initialName, initialCompany,initialDescription,initialContent,initialImage,initialWheretoBuy,initialWheretoBuy2,onSubmitProp } = props;
    const [name,setName] = useState(initialName);
    const [company,setCompany] = useState(initialCompany);
    const [description, setDescription] = useState(initialDescription);
    const [content, setContent] = useState(initialContent);
    const [image, setImage] = useState(initialImage);
    const [wheretobuy, setWheretoBuy] = useState(initialWheretoBuy);
    const [wheretobuy2, setWheretoBuy2] = useState(initialWheretoBuy2);

    const [errors, setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name, company,description,content,image,wheretobuy,wheretobuy2});
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p><h3>Perfume Form&nbsp;</h3>
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
                                <OutlinedInput type="text" name="name" onChange={(e)=>setName(e.target.value)} value={name} />
                            </FormControl>
                            <FormControl variant="outlined" style={styles.input}>
                                <InputLabel>Company</InputLabel>
                                <OutlinedInput type="text" name="company" onChange={(e)=>setCompany(e.target.value)} value={company}/>
                            </FormControl>
                            <FormControl variant="outlined" style={styles.input}>
                                <InputLabel>Description</InputLabel>
                                <OutlinedInput type="text" name="description" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                            </FormControl>
                            <FormControl variant="outlined" style={styles.input}>
                                <InputLabel>Perfume Content</InputLabel>
                                <OutlinedInput type="text" name="content" onChange={(e)=>setContent(e.target.value)} value={content}/>
                            </FormControl>
                            <FormControl variant="outlined" style={styles.input}>
                                <InputLabel>Image</InputLabel>
                                <OutlinedInput type="text" name="image" onChange={(e)=>setImage(e.target.value)} value={image}/>
                            </FormControl>
                            <FormControl variant="outlined" style={styles.input}>
                                <InputLabel>Where to Buy</InputLabel>
                                <OutlinedInput type="text" name="wheretobuy" onChange={(e)=>setWheretoBuy(e.target.value)} value={wheretobuy} />
                            </FormControl>
                            <FormControl variant="outlined" style={styles.input}>
                                <InputLabel>Where to Buy (Option 2)</InputLabel>
                                <OutlinedInput type="text" name="wheretobuy2" onChange={(e)=>setWheretoBuy2(e.target.value)} value={wheretobuy2} />
                            </FormControl>
                            <Button onClick={()=>navigate("/admin")} className="btn btn-secondary btn-sm">
                                Cancel
                            </Button>
                            <Button type="submit" variant="contained" color="primary" style={{marginLeft: "10px"}}>
                                Submit
                            </Button>
                        </form>
                    </Paper>
                    </center>
                </div>
            </div>
        </div>
    )



}