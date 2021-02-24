import React, { useState, useEffect } from 'react'

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

const Editing = props => {
  const [ perfume, setPerfume ] = useState(props.currentPerfume)

  useEffect(
    () => {
      setPerfume(props.currentPerfume)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setPerfume({ ...perfume, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        props.updatePerfume(perfume.id, perfume)
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
    <Button type="submit" variant="contained" color="primary" style={{marginLeft: "10px"}}>
      Update
    </Button>
    {/* <button>Update Perfume</button> */}
    <button onClick={() => props.setEditing(false)} className="button muted-button">
      Cancel
    </button>
    </form>
  )
}

export default Editing;