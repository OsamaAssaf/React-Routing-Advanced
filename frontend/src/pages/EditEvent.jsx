import { useRouteLoaderData } from "react-router";
import EventForm from "../components/EventForm";

function EditEventPage() {
  const data = useRouteLoaderData("event-detail");
  return <EventForm event={data.event} method="PATCH" />;
}

export default EditEventPage;
