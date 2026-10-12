import  { use, type Dispatch, type SetStateAction } from "react";
import type { TicketType } from "../TicketType";
import AvailableTicket from "./AvailableTicket";
///import TaskTicket from "./TaskTicket";

interface AllTicketProps {
    ticketPromise:Promise<TicketType[]>,
    progress:number,
    resolved:number,
    setProgress:Dispatch<SetStateAction<number>>,
    setResolved:Dispatch<SetStateAction<number>>,
    ticketCard:TicketType[],
    setTicketCard:Dispatch<SetStateAction<TicketType[]>>
    resolvedTicket:TicketType[],
    setResolvedTicket:Dispatch<SetStateAction<TicketType[]>>
}
const AllTicket = ({ticketPromise,progress,setProgress,resolved,setResolved,ticketCard,setTicketCard,resolvedTicket,setResolvedTicket}:AllTicketProps) => {
const tickets =use(ticketPromise)
// new idea

//console.log(tickets)
//
    return (
        <div className="w-360 mt-30 mx-auto custom-ticket">
            <div>
                <h3 className=" w-262.5 text-[#34485A] font-semibold text-[1.5rem] custom-ticket1">Customer Tickets</h3>
            </div>
            <div>
                <div className="flex justify-between">
                <AvailableTicket progress={progress} setProgress={setProgress} resolved={resolved} setResolved={setResolved} setTicketCard={setTicketCard} ticketCard={ticketCard} tickets={tickets} resolvedTicket={resolvedTicket} setResolvedTicket={setResolvedTicket}></AvailableTicket>
                </div>
            </div>
        </div>
    );
};

export default AllTicket;