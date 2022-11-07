import React, { Component } from "react";
import axios from "axios";

const EventTypeMethods = () => {

  //GET ALL

  const getEventTypes = async () => {
    const { data } = await axios.get('/event_types');
    return data;
  }

  //GET ONE

  const getEventTypesById = async (eventType) => {
    const { data } = await axios.get(`/event_types/${eventType.id}`);
    return data;
  }

  //POST

  const createEventType = async (post) => {
    const { data } = await axios.post('/event_types', post);
    return data;
  }

  //PUT

  const updateEventType = async (eventType) => {
    const { data } = await axios.patch(`/event_types/${eventType.id}`, eventType);
    return data;
  }

  //DELETE

  const deleteEventType = async ({ id }) => {
    const { data } = await axios.delete(`/event_types/${id}`, id);
    return data;
  }



//   const { data, status } = useQuery('getOne', getEventTypesById);
//   if (status === 'loading') {
//     return (<div>
//       <span className="spinner-border">Loading Posts...</span>
//     </div>)
//   }

//   if (status === 'error') {
//     return <p>Error</p>
//   }

//   return <div>
//     <h2>Lista de tipos de eventos</h2>
//     {data.map(prod => (
//       <EventListCard eventType={prod} />
//     ))}
//   </div>
}

export default EventTypeMethods;