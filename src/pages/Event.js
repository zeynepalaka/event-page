import{
    useParams
} from "react-router-dom";

export function Event() {
    let params = useParams();
    return <h2>Event {params.eventId}</h2>;
  }                                        
  