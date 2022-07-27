import React from "react";
import EventItem from "./event-item";
const EventList = (props) => {
  const { items } = props;
  return (
    <div>
      {items.map((event) => (
        <EventItem></EventItem>
      ))}
    </div>
  );
};

export default EventList;
