import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Suspense, useState } from "react"
import Banner from "./Banner"
import Navbar from "./Navbar"
import type { TicketType } from "./TicketType"
import AllTicket from "./Components/AllTicket"
 

const ticketFetch
 =async():Promise<TicketType[]>=>{
 const res = await fetch('/data.json')
 const data = await res.json()
 return data;
}

function App() {
  
const  [ticketPromise] =useState(()=>ticketFetch())
// used
const [progress,setProgress]=useState (0)
//not used yet
const [resolved,setResolved] = useState (0)
//on the progress
const [ticketCard,setTicketCard]=useState<TicketType[]>([])
const [resolvedTicket,setResolvedTicket]=useState<TicketType[]>([])
  return (
    <>
      <Navbar></Navbar>
      <Banner progress={progress} resolved={resolved}></Banner>
      <Suspense fallback={<h1>Loading...</h1>}>
        <AllTicket progress={progress} setProgress={setProgress} resolved={resolved} setResolved={setResolved} ticketPromise={ticketPromise} ticketCard={ticketCard} setTicketCard={setTicketCard} resolvedTicket={resolvedTicket} setResolvedTicket={setResolvedTicket}></AllTicket>
      </Suspense>
       <ToastContainer />
    </>
  )
}

export default App
