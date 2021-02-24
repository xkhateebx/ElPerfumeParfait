import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton';
import UpdateButton from '../components/UpdateButton';
import PerfumeUpdate from '../components/PerfumeUpdate';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const PerfumesList = (props) => {
    const [perfumes, setPerfumes] = useState([])
    
    const { id } = props;
    const [perfume, setPerfume] = useState({});

     //Material-UI Button
     const useStyles = makeStyles((theme) => ({
        margin: { 
        margin: theme.spacing(1),
        },
        extendedIcon: {
        marginRight: theme.spacing(1),
        },
    }));
    const classes = useStyles();

    useEffect( () => {
        axios.get('http://localhost:8000/api/allPerfumes')
            // setPerfumes(perfumes)
            .then(response => setPerfumes((response.data)))
            .catch(error => console.log("There was an issue: ", error))
    },[perfumes])

    const removeFromDom = (perfumeId,perfumeName) => {
        setPerfumes(perfumes.filter(perfume => perfume._id != perfumeId))
        setPerfumes(perfumes.filter(perfume => perfume.name != perfumeName))
        alert(`Are you sure you want to remove "${perfumeName}?"`);
    }
    // const updatePerfume = perfume => {
    //     axios.put('http://localhost:8000/api/perfume/' + id, perfume)
    //         .then(res => console.log(res));
    // }

    return (
        <div className="container">
             <div className="col-12">
                    <p><h3>All Perfumes List&nbsp;</h3></p>
                </div>
            <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Image</th>
                    <th scope="col">Perfume</th>
                    <th scope="col">Brand</th>
                    {/* <th scope="col">Content</th>
                    <th scope="col">Description</th>
                    <th scope="col">Where to Buy</th> */}
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                {perfumes.length > 0 && perfumes.map((item,index)=>
                {
                    return(
                <tbody>
                    <tr>
                    <th scope="row" key={index}>{index+1}</th>
                    <td><img src={`../images/${item.image}.jpg`} alt={item.image} width="40%"/></td>
                    <td><Link to={"/products/"+item._id}>{item.name}</Link></td>
                    <td>{item.company}</td>
                    {/* <td>{item.content}</td>
                    <td>{item.company}</td>
                    <td>{item.wheretobuy}</td> */}
                    <td>
                        <Link to={"/update/"+item._id}>
                        <Button variant="outlined" size="meduim" color="primary" className={classes.margin}>
                            Update
                        </Button>
                        {/* <UpdateButton onClick={perfumeUpdate} perfumeId={item._id} /> */}
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
