import React, { useEffect, useState } from 'react';
import UpdateForm from '../components/UpdateForm';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import PerfumeUpdate from '../components/PerfumeUpdate';


export default (props) => {
    const { id } = props;
    const [perfume, setPerfume] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/perfume/' + id)
            .then(res => {
                setPerfume(res.data);
                setLoaded(true);
            })
    }, [])

    // const updatePerfume = perfume => {
    //     axios.put('http://localhost:8000/api/perfume/' + id, perfume)
    //         .then(res => console.log(res));
    // }

    return (
        <div>
            <p><Link to="/home"> Home </Link></p>
            {loaded && (<PerfumeUpdate perfume={perfume}/> )}
            {/* {loaded && (<UpdateForm onSubmitProp={updatePerfume} perfume={perfume}/> )} */}
        </div>
    )
}


