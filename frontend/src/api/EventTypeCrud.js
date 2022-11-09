import axios from 'axios';
import { useEffect,useState } from 'react';
import {Table,TableContainer,TableHead,TableCell,TableBody,TableRow} from  '@mui/material/core'

const baseUrl = 'http://localhost:3000/event_types'

const getEventType = async() =>{
    await axios.get(baseUrl).then(response =>{
        console.log(response.data);
    })
}

const getOneEventType = async() =>{
    await axios.get(baseUrl).then(response =>{
        console.log(response.data);
    })
}

const createEventType = async() =>{
    await axios.create(baseUrl).then(response =>{
        console.log(response.data);
    })
}

const updateEventType = async() =>{
    await axios.get(baseUrl).then(response =>{
        console.log(response.data);
    })
}



const deleteEventType = async() =>{
    await axios.get(baseUrl).then(response =>{
        console.log(response.data);
    })
}