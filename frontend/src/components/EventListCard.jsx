const EventListCard = ({eventType}) => {
    return <div>
        <h5>{eventType.id}</h5>
        <h5>{eventType.name}</h5>
    </div>
}

export default EventListCard;