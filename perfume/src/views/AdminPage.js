import React, { useEffect, useState } from 'react';
import AddForm from '../components/AddForm';
import PerfumeList from '../components/PerfumeList';
import UpdateForm from '../components/UpdateForm';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import PerfumeForm from '../components/PerfumeForm';
import PerfumeUpdate from '../components/PerfumeUpdate';

export default () => {
    //To display list of all products near the add form
    const [perfumes, setPerfumes] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/allPerfumes')
            .then(res=>{
                setPerfumes(res.data);
                setLoaded(true);
            });
            
    },[])

    const createPerfume = perfume => {
        axios.post('http://localhost:8000/api/addInfo', perfume)
        .then(res=>{
            setPerfumes([...perfumes, res.data]);
        })
    }

    return (
        <div>
            <p><Link to="/home"> Home </Link></p>
            <div className="top">
            <PerfumeForm onSubmitProp={createPerfume} initialName="" initialCompany="" initialDescription="" initialContent="" initialImage="" initialWheretoBuy="" />
            {/* <PerfumeUpdate /> */}
            </div>
            {loaded && <PerfumeList perfumes={perfumes}/>}
        </div>
    )
}