
import { useQuery,useMutation, useQueryClient  } from "react-query";
import {getEventTypes, getEventTypesById,createEventType,
updateEventType,deleteEventType} from "../../api/EventTypeMethods"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTrash,faUpload} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";

const EventTypeList = () => {
    const [newEventType,setNewEventType] = useState('')
    const queryClient = useQueryClient()

    const {
        isLoading,
        isError,
        error,
        data: eventList
    } = useQuery('eventList',getEventTypes)

    const addEventListMutation = useMutation(createEventType,{
        onSuccess: () =>
        {
            //Invalidates cache and refetch
            queryClient.invalidateQueries("eventList")
        }
    })

    const updateEventListMutation = useMutation(updateEventType,{
        onSuccess: () =>
        {
            //Invalidates cache and refetch
            queryClient.invalidateQueries("eventList")
        }
    })

    const deleteEventListMutation = useMutation(deleteEventType,{
        onSuccess: () =>
        {
            //Invalidates cache and refetch
            queryClient.invalidateQueries("eventList")
        }
    })

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     addEventListMutation.mutate({})
    // }

    const newEventTypeForm = (
        <form onSubmit={handleSubmit}>

        </form>
    )

    return(
        <div>EventTypeList</div>
    )
}      

export default EventTypeList;