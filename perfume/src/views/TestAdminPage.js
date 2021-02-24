import React, { useState, Fragment, useEffect } from 'react'
import Adding from '../components/Adding'
import Editing from '../components/Editing'
import PerfumesList from '../components/PerfumeList'
import TestList from '../components/TestList'
import axios from 'axios';

const App = () => {
	// Data
	const perfumesData = [
		{id: 1,name: 'PureXs',company: 'Pacco Rabbane', description: 'Floral', content: 'Musk',image: 'purexs',wheretobuy: 'eBay'},
	]
	const initialFormState = {id: null, name: '', company: '', description: '',content: '',image: '',wheretobuy: ''}

	// Setting state
	const [ perfumes, setPerfumes ] = useState(perfumesData)
	const [ currentPerfume, setCurrentPerfume ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)
    const [loaded, setLoaded] = useState(false);
//For Errors
    const [errors, setErrors] = useState([])


    useEffect(()=>{
        axios.get('http://localhost:8000/api/allPerfumes')
            .then(res=>{
                setPerfumes(res.data);
                setLoaded(true);
            });
            
    },[])

	// CRUD operations
	const addPerfume = perfume => {
        axios.post('http://localhost:8000/api/addInfo', perfume)
        
		.then(res =>{
            perfume.id = perfumes.length + 1
		    setPerfumes([ ...perfumes, perfume ])
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

	const deletePerfume = id => {
		setEditing(false)
		setPerfumes(perfumes.filter(perfume => perfume.id !== id))
	}

	const updatePerfume = (id, updatedPerfume) => {
        axios.put('http://localhost:8000/api/perfume/' + id, updatedPerfume)
        .then(res=>{
        setEditing(false)
        setPerfumes(perfumes.map(perfume => (perfume.id === id ? updatedPerfume : perfume)))
        })
    }

	const editRow = perfume => {
        // axios.put('http://localhost:8000/api/perfume/' + perfume.id, perfume)
        // .then(res =>{
		setEditing(true)
        setCurrentPerfume({id: perfume.id,name: perfume.name, company: perfume.company, description: perfume.description,content: perfume.content,image: perfume.image,wheretobuy: perfume.wheretobuy })
        // })
        // .catch(err => {
        //     const errorResponse = err.response.data.errors;
        //     const errorArray = [];
        //     for (const key of Object.keys(errorResponse)) { 
        //         errorArray.push(errorResponse[key].message)
        //     }
        //     // Set Errors
        //     setErrors(errorArray);
        // })
    }

	return (
		<div className="container">
			<h1>Admin Page</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit Perfume</h2>
							<Editing
								editing={editing}
								setEditing={setEditing}
								currentPerfume={currentPerfume}
								updatePerfume={updatePerfume}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add Perfume</h2>
							<Adding addPerfume={addPerfume} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>List of All Perfumes</h2>
					<TestList perfumes={perfumes} editRow={editRow} deletePerfume={deletePerfume} />
				</div>
			</div>
		</div>
	)
}

export default App