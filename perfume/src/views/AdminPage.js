import React, { useEffect, useState } from 'react';
import AddForm from '../components/AddForm';
import PerfumeList from '../components/PerfumeList';
import UpdateForm from '../components/UpdateForm';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

export default () => {
    //  //To display list of all products near the add form
    const [perfume, setPerfume] = useState([]);
    // //  const [perfumes, setPerfumes] = useState([]);
    const [loaded, setLoaded] = useState(false);

    // useEffect(()=>{
    //     axios.get('http://localhost:8000/api/allPerfumes')
    //         .then(res=>{
    //             setPerfume(res.data);
    //             setLoaded(true);
    //         });
    // },[])
    // const createPerfume = perfume => {
    //     axios.post('http://localhost:8000/api/addInfo', perfume)
    //     .then((newP) => {
    //         let test = [...perfume]
    //         test.push(newP.data)
    //         setPerfume(test)
    //         })
    // }
    return (
        <div>
            <p><Link to="/home"> Home </Link></p>
            <div className="top">
            <AddForm />
            </div>
            <PerfumeList />
        </div>
    )
}