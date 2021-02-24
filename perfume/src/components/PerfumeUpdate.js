import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import PerfumeForm from '../components/PerfumeForm';

export default props => {
    const { id } = props;
    const [perfume, setPerfume] = useState([]);
    const [loaded, setLoaded] = useState(false);

    //Update

    const [name, setName] = useState(""); 
    const [company, setCompany] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [wheretobuy, setWheretoBuy] = useState("");

    const [errors,setErrors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/perfume/' + id)
            .then(res => {
                setPerfume(res.data);
                setLoaded(true);
            })
    }, [])

    const updatePerfume = perfume => {
        axios.put('http://localhost:8000/api/perfume/' + id, perfume) 
            .then(res => console.log(res))
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

    return(
        <div className="container">
        {loaded && (
            <PerfumeForm 
                onSubmitProp={updatePerfume}
                initialName={props.perfume.name}
                initialCompany={props.perfume.company}
                initialDescription={props.perfume.description}
                initialContent={props.perfume.content}
                initialImage={props.perfume.image}
                initialWheretoBuy={props.perfume.wheretobuy}
            />
        )}
        </div>
    )
}
