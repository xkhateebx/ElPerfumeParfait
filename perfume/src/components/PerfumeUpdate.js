import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PerfumeForm from '../components/PerfumeForm';

export default props => {
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

    const updatePerfume = perfume => {
        axios.put('http://localhost:8000/api/perfume/' + id, perfume)
            .then(res => console.log(res));
    }

    return(
        <div className="container">
        {loaded && (
            <PerfumeForm 
                onSubmitProp={updatePerfume}
                initialName={perfume.name}
                initialCompany={perfume.company}
                initialDescription={perfume.description}
                initialContent={perfume.content}
                initialImage={perfume.image}
                initialWheretoBuy={perfume.wheretobuy}
            />
        )}
        </div>
    )
}
