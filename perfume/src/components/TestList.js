import React, {useState, useEffect} from 'react'
import axios from 'axios';


const TestList = (props) => {
    // const [perfumes, setPerfume] = useState([])

    // useEffect( () => {
    //     axios.get('http://localhost:8000/api/allPerfumes')
    //         // setPerfumes(perfumes)
    //         .then(response => setPerfumes((response.data)))
    //         .catch(error => console.log("There was an issue: ", error))
    // },[perfumes])

return(
        <div className="container">
        <table>
        <thead>
        <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Company</th>
            <th>Description</th>
            <th>Content</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
            {props.perfumes.length > 0 ? (
            props.perfumes.map(perfume => (
            
            <tr key={perfume.id}>
                <td>{perfume.id}</td>
                <td><img src={`../images/${perfume.image}.jpg`} alt={perfume.image} width="20%"/></td>
                <td>{perfume.name}</td>
                <td>{perfume.company}</td>
                <td>{perfume.description}</td>
                <td>{perfume.content}</td>
                <td>
                <button
                    onClick={() => {
                        props.editRow(perfume)
                    }}
                    className="button muted-button"
                >
                    Edit
                </button>
                <button
                    onClick={() => props.deletePerfume(perfume.id)}
                    className="button muted-button"
                >
                    Delete
                </button>
                </td>
            </tr>
            
                                )
            )
        ) : (
            <tr>
                <td colSpan={3}>No perfumes</td>
            </tr>
        )
        }
        </tbody>
        </table>
        </div>
    )
    }

export default TestList;