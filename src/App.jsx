
// import LudoBoard from "./LudoBoard";
import "./App.css";
// import TodoList from "./TodoList";
import Lottery from "./Lottery";
// import TicketNum from "./Ticket";
import {sum} from "./Helper";

function App() {
  let wincondition=(ticket)=>{
     return sum(ticket)===15;

  }
 

  return (
    <>
    {/* <LudoBoard/> */}
    <Lottery n={3} wincondition={wincondition}/>
    {/* <TicketNum ticket={[0,1,2]}/> */}
    {/* <TodoList/> */}
    </>
  );
}

export default App
