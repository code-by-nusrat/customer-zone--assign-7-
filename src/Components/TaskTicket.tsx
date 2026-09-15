import type { Dispatch, SetStateAction } from "react";
import type { TicketType } from "../TicketType";
import { toast } from "react-toastify";
import { FaCheck } from "react-icons/fa";

interface TaskTicketProp {
    tickets: TicketType[],
    ticketCard: TicketType[],
    setTicketCard: Dispatch<SetStateAction<TicketType[]>>
    resolved: number,
    setResolved: Dispatch<SetStateAction<number>>
    progress: number,
    setProgress: Dispatch<SetStateAction<number>>,
    resolvedTicket: TicketType[],
    setResolvedTicket: Dispatch<SetStateAction<TicketType[]>>
}
const TaskTicket = ({ tickets, ticketCard, setTicketCard, resolved, setResolved, progress, setProgress, resolvedTicket, setResolvedTicket }: TaskTicketProp) => {
    const removeBtn = (id: number) => {
        const selectedTicket = ticketCard.find(ticket => ticket.id === id)
        if (!selectedTicket) return;
        setTicketCard((prev) =>
            prev.filter((ticket) => ticket.id !== id))
        toast.success("Completed!");
        setResolved((prev) => prev + 1)
        setProgress((prev) => prev - 1)
        setResolvedTicket((prev) => [
            ...prev, selectedTicket
        ])
    }
    const removeResolvedTicket = (id: number) => {
    setResolvedTicket(prev =>
        prev.filter(ticket => ticket.id !== id)
    );

    setResolved(prev => prev - 1);
};
    return (
        <div className='mt-3 w-89.5 task-ticket'>
            <h2 className="card-title font-semibold text-[1.5rem] task">Task Status</h2>
            {/* first */}
            <div className="card card-border bg-base-100 w-89.5 status-card">
                <div className="card-body">
                    {ticketCard.length === 0 ?
                        <p className="text-[1rem] font-normal text-[#627382] status-card2">Select a ticket to add to Task Status</p> :
                        ticketCard.map((ticket) => {
                            return <div key={ticket.id} className="border rounded-lg p-3">
                                <h3 className="font-semibold text-black text-[1.1rem] ml-3">
                                    {ticket.title}
                                </h3>

                                <button onClick={() => removeBtn(ticket.id)} className="btn btn-wide bg-[#02A53B] flex mx-auto mt-4">Complete</button>
                            </div>
                        })}
                </div>
            </div>
            {/* first */}

            {/* second */}
            <h2 className="card-title font-semibold text-[1.5rem] task">Resolved Task</h2>
            <div className="card card-border bg-base-100 w-89.5 mt-3 status-card">
                <div className="card-body">
                    {resolvedTicket.length === 0 ? (
                        <p className="text-[1rem] font-normal text-[#627382] status-card3">
                            No resolved tasks yet.
                        </p>
                    ) : (
                        resolvedTicket.map((ticket) => (
                            <div key={ticket.id} className="border rounded-lg p-3 bg-[#B9F8CF]">
                                <h3 className="font-semibold text-black text-[1.1rem]">
                                    {ticket.title}</h3>
                                <div className="flex  items-center gap-19">
                                   <div className="flex items-center gap-1">
                                    <FaCheck className="text-[#02A53B]" />
                                     <p className="text-[1.1rem] text-[#02A53B]">
                                        completed</p>
                                   </div>
                                    <p onClick={() => removeResolvedTicket(ticket.id)}>Click to remove</p>
                                </div>
                            </div>
                        ))
                    )}
                    {/* <p className="text-[1rem] font-normal text-[#627382]">No resolved tasks yet.</p> */}
                </div>
            </div>

            {/* second */}
        </div>
    );
};

export default TaskTicket;