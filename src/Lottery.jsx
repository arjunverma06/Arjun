import { useState } from "react";
// simport "./Lottery.css"
import {genticket,sum} from "./Helper";
// import TicketNum from "./TicketNum";
import Ticket from "./Ticket";
export default function Lottery({n,wincondition}) {
    let [ticket, setticket] = useState(genticket(n));
    let win=wincondition(ticket);
    let buyticket=()=>{
        setticket(genticket(n))

        
    }

    return(
        <div>
            <h1>Lottery</h1>
            <div className="ticket">
                <Ticket ticket={ticket}/>
                {/* <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span> */}
            </div>
            <br></br>
            <button onClick={buyticket}>Buy new ticket</button>
            <h3>{win  && "congatulation you  won!"}</h3>

            </div>

    )
}