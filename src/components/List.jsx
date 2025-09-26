import React from "react";
import TicketCard from "./TicketCard";
import { toast } from "react-toastify";

const List = ({ tickets, onSelect }) => {
  const handleSelect = (ticket) => {
    onSelect(ticket);
    toast.success(`Ticket ${ticket.id} moved to In-Progress`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tickets.length ? (
        tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            onClick={() => handleSelect(ticket)}
          />
        ))
      ) : (
        <div className="text-gray-500">No open tickets left.</div>
      )}
    </div>
  );
};

export default List;
