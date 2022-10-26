import React, { Component } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import EventListCard from "./EventListCard";

const TdlistsContainer = () => {

  const getEventTypes = async () => {
    const response = await fetch('/event_types');
    return response.json();
  }

  const { data, status } = useQuery('event_types', getEventTypes);

  if (status === 'loading') {
    return <p>Recuperando los tipos de eventos...</p>
  }

  if (status === 'error') {
    return <p>Error</p>
  }

  return <div>
    <h2>Lista de tipos de eventos</h2>
    {data.map(prod =>(
   <EventListCard eventType={prod}/>   
    ))}
  </div>
}

export default TdlistsContainer;