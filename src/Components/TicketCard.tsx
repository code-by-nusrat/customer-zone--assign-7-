import { FaCircle } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { toast } from 'react-toastify';
import type { TicketType } from '../TicketType';
import type { Dispatch, SetStateAction } from "react";
interface TicketProp {
    ticket: TicketType,
    progress:number,
    setProgress:Dispatch<SetStateAction<number>>
    ticketCard:TicketType[],
    setTicketCard:Dispatch<SetStateAction<TicketType[]>>
}
const TicketCard = ({ ticket,progress, setProgress,ticketCard,setTicketCard,resolvedTicket,setResolvedTicket}: TicketProp) => {
    const progressCount =()=>{
      setProgress(prev=>prev +1)
     toast.success("Ticket added successfully!");
    //  task status card
    setTicketCard((prev)=>[...prev,ticket])
    }
    return (
        <div onClick={() => progressCount()} className='inter w-128.25 h-40 rounded-lg bg-white shadow-sm ticket'>
            {/* first part */}
            <div className="flex justify-between items-center pt-4 mx-3">
                <div>
                    <h3 className="text-black text-[1.1rem] font-medium ">{ticket.title}</h3>
                </div>
                <div>
                    <button className={`btn  text-[#02A53B] rounded-3xl  h-8 ${ticket.status === 'Open' ? "bg-[#B9F8CF]" :"bg-[#F8F3B9] text-[#9C7700]"}`}><FaCircle />
                    {ticket.status}</button>
                </div>
            </div>
            {/* first part */}

            {/* second part */}
            <div>
                <p className="text-[#627382] mt-2 mx-3">{ticket.description}</p>
            </div>
            {/* second part */}
            
            {/* third part */}
            <div className="flex justify-between items-center mx-3 mt-2.75">
                <p className="text-[#627382] text-[14px]">{ticket.ticketNum}</p>
                <p className={`text-[1 rem] ${ticket.priority === "High Priority" ? "text-[#F83044]" : ticket.priority === "Medium Priority" ? "text-[#FEBB0C]" :"text-[#02A53B]"} `}>{ticket.priority}</p>
                <p className="text-[#627382] text-[14px]">{ticket.customer}</p>
                <div className="flex gap-2 items-center">
                    <CiCalendar /> 
                    <p className="text-[14px] text-[#627382]"> {ticket.createdAt}</p>
                </div>
            </div>
            {/* third part */}
        </div>
    );
};

export default TicketCard;