import React from 'react'
import axios from 'axios';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default props => {
    const { perfumeId, successCallback } = props;

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
    

    const deletePerfume = e => {
        axios.delete('http://localhost:8000/api/perfume/' + perfumeId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <>
        {/* <Button onClick={deletePerfume} variant="outlined" size="meduim" color="primary" className={classes.margin}>
            Delete
        </Button> */}
        <IconButton onClick={deletePerfume} aria-label="delete" className={classes.margin}>
        <DeleteIcon fontSize="large" />
        </IconButton>
        </>
    )
}