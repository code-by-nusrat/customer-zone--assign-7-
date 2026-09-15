import type { Dispatch, SetStateAction } from "react";
import type { TicketType } from "../TicketType";
import TicketCard from "./TicketCard";
import TaskTicket from "./TaskTicket";

interface TicketProp {
    tickets: TicketType[],
    progress: number,
    setProgress: Dispatch<SetStateAction<number>>,
    resolved: number,
    setResolved: Dispatch<SetStateAction<number>>
    ticketCard:TicketType[],
    setTicketCard:Dispatch<SetStateAction<TicketType[]>>
    resolvedTicket:TicketType[],
    setResolvedTicket:Dispatch<SetStateAction<TicketType[]>>
}

const AvailableTicket = ({ tickets, progress, setProgress, resolved, setResolved,  ticketCard, setTicketCard,resolvedTicket,setResolvedTicket}: TicketProp) => {

    return (
        <div className="w-360 flex justify-between ticket-container">
            <div className=" w-262.5 grid grid-cols-2 gap-y-3 mt-3 all-card">
                {
                    tickets.map((ticket: TicketType) => {
                        return <div key={ticket.id}>
                            <div className=" w-128.25 all">
                                <TicketCard progress={progress} setProgress={setProgress} setTicketCard={setTicketCard} ticketCard={ticketCard} key={ticket.id} ticket={ticket}></TicketCard>
                            </div>
                        </div>
                    })
                } 
            </div>

            {/* second part */}
           <div>
            <TaskTicket ticketCard={ticketCard} setTicketCard={setTicketCard} tickets={tickets} resolved={resolved} setResolved={setResolved} progress={progress} setProgress={setProgress} resolvedTicket={resolvedTicket} setResolvedTicket={setResolvedTicket}></TaskTicket>
           </div>
            {/* second part */}
        </div>
    );
};

export default AvailableTicket;