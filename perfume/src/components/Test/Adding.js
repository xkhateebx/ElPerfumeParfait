import React, { useState } from 'react'
import { Link, navigate } from '@reach/router';

import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';

const styles = {
    paper: {
        width: "20rem", padding: "1rem"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}

const Adding = props => {
	const initialFormState = {name: '', company: '', description: '',content: '',image: '',wheretobuy: ''}
	const [ perfume, setPerfume ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target
		setPerfume({ ...perfume, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
                if (!perfume.name || !perfume.company) return
				props.addPerfume(perfume)
				setPerfume(initialFormState)
			}}
		>
            <FormControl variant="outlined" style={styles.input}>
                <InputLabel>Perfume Name</InputLabel>
                <OutlinedInput type="text" name="name" value={perfume.name} onChange={handleInputChange}  />
            </FormControl>
            <FormControl variant="outlined" style={styles.input}>
                <InputLabel>Company</InputLabel>
                <OutlinedInput type="text" name="company" value={perfume.company} onChange={handleInputChange} />
            </FormControl>
            <FormControl variant="outlined" style={styles.input}>
                <InputLabel>Description</InputLabel>
                <OutlinedInput type="text" name="description" value={perfume.description} onChange={handleInputChange} />
            </FormControl>
            <FormControl variant="outlined" style={styles.input}>
                <InputLabel>Perfume Content</InputLabel>
                <OutlinedInput type="text" name="content" value={perfume.content} onChange={handleInputChange} />
            </FormControl>
            <FormControl variant="outlined" style={styles.input}>
                <InputLabel>Image</InputLabel>
                <OutlinedInput type="text" name="image" value={perfume.image} onChange={handleInputChange} />
            </FormControl>
            <FormControl variant="outlined" style={styles.input}>
                <InputLabel>Where to Buy</InputLabel>
                <OutlinedInput type="text" name="wheretobuy" value={perfume.wheretobuy} onChange={handleInputChange} />
            </FormControl>
            <Button onClick={()=>navigate("/test")} className="btn btn-secondary btn-sm">
                Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary" style={{marginLeft: "10px"}}>
                Submit
            </Button>
		</form>
	)
}

export default Adding;