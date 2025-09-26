import React from "react";

const TicketCard = ({ ticket, onClick }) => {
  const badge = {
    High: "bg-red-400 text-white-700",
    Medium: "bg-yellow-200 text-yellow-700",
    Low: "bg-green-200 text-green-700",
  };
  return (
    <div onClick={onClick} className="bg-white rounded-lg p-4 shadow-sm border hover:shadow-md cursor-pointer">
      <div className="flex justify-between">
        <div>
          <h4 className="font-semibold text-gray-800">{ticket.title}</h4>
          <p className="text-sm text-gray-600 mt-3 line-clamp-3">{ticket.description}</p>
          <div className="mt-3 flex gap-3 text-xs">
            <span className="text-gray-500">{ticket.id}</span>
            <span className={`px-2 py-1 rounded-full font-semibold ${badge[ticket.priority]}`}>
              {ticket.priority} PRIORITY
            </span>
          </div>
        </div>
        <div className="text-right text-sm">
          <div className={`${ticket.status==="open"?"bg-green-300 text-green-700 w-[60px] h-[25px] rounded-xl":"text-yellow-600"} font-medium`}>
            {ticket.status==="open"?"Open":"In-Progress"}
          </div>
          <div className="text-xs text-gray-400 mt-3">{ticket.customer}</div>
          <div className="text-xs text-gray-300 mt-3">{ticket.createdAt}</div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
