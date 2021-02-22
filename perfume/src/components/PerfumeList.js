import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton';
import UpdateButton from '../components/UpdateButton';

const PerfumesList = (props) => {
    const [perfumes, setPerfumes] = useState([])
    
    const { id } = props;
    const [perfume, setPerfume] = useState({});


    useEffect( () => {
        axios.get('http://localhost:8000/api/allPerfumes')
            setPerfumes(perfumes)
            // .then(response => setPerfumes((response.data)))
            // .catch(error => console.log("There was an issue: ", error))
    },[perfumes])

    const removeFromDom = (perfumeId,perfumeName) => {
        setPerfumes(perfumes.filter(perfume => perfume._id != perfumeId))
        setPerfumes(perfumes.filter(perfume => perfume.name != perfumeName))
        alert(`Are you sure you want to remove "${perfumeName}?"`);
    }
    const updatePerfume = perfume => {
        axios.put('http://localhost:8000/api/perfume/' + id, perfume)
            .then(res => console.log(res));
    }


    return (
        <div className="container">
            <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Perfume</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                {perfumes.length > 0 && perfumes.map((item,index)=>
                {
                    return(
                <tbody>
                    <tr>
                    <th scope="row">{item._id}</th>
                    <td>{item.name}</td>
                    <td>{item.company}</td>
                    <td>
                        <Link to={"/update/"+item._id}>
                            <UpdateButton perfumeId={item._id} successCallback={updatePerfume}/>
                        </Link>
                        <DeleteButton perfumeId={item._id} successCallback={()=>removeFromDom(item._id,item.name)} />
                    </td>
                    </tr>
                </tbody>
                        )
                }
                                                    )
                }
                </table>
        </div>
            )
}

export default PerfumesList;
