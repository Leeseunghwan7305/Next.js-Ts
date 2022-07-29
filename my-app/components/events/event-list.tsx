import React from "react";
import { IDummyEvent } from "../../types";
import EventItem from "./event-item";
interface IEventLIst {
  items: IDummyEvent[];
}

const EventList = ({ items }: IEventLIst) => {
  return (
    <div>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          image={event.image}
          date={event.date}
          location={event.location}
        ></EventItem>
      ))}
    </div>
  );
};

export default EventList;
