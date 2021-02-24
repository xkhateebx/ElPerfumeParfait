import React, { useEffect, useState } from 'react';
import AddForm from '../components/AddForm';
import PerfumeList from '../components/PerfumeList';
import UpdateForm from '../components/UpdateForm';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import PerfumeForm from '../components/PerfumeForm';
import PerfumeUpdate from '../components/PerfumeUpdate';

export default (props) => {
    //To display list of all products near the add form
    const [perfumes, setPerfumes] = useState([]);
    const [loaded, setLoaded] = useState(false);

    //Adding
    const [perfume, setPerfume] = useState([])
    const [errors, setErrors] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/allPerfumes')
            .then(res=>{
                setPerfumes(res.data);
                setLoaded(true);
            });
            
    },[])

    const createPerfume = perfume => {
        axios.post('http://localhost:8000/api/addInfo', perfume)
        // .then(res=>{
        //     setPerfumes([...perfumes, res.data]);
        // })
        .then((newP) => {
            let test = [...perfumes]
            test.push(newP.data)
            setPerfumes(test)
            })
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
        <div>
            <p><Link to="/"> Home </Link></p>
            <div className="top">
            <PerfumeForm onSubmitProp={createPerfume} initialName="" initialCompany="" initialDescription="" initialContent="" initialImage="" initialWheretoBuy="" />
            {loaded && <PerfumeList />}
            </div>
        </div>
    )
}