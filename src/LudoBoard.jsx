// import { useState } from "react";
// export default function LudoBoard() {
//   let [move, setmoves] = useState({
//     blue: 0,
//     yellow: 0,
//     green: 0,
//     red: 0,
//   });
//   let [arr,setarr]=useState(["no moves"])
//   // function increa(){
//   //     setblue(blue+1);
//   // }
//   let updatemove=()=>{
//     // move.blue+=1;
//     console.log(`console.log ${move.blue}`);
//     setmoves((previous)=>{
//         return {...previous, blue:previous.blue+1}

//     })
//     setmoves((previous)=>{
//         return {...previous, blue:previous.blue+1}

//     })
//     arr.push("blue push");
//     setarr(arr)
//     console.log(arr);
//   };
//   let updateove=()=>{
//     // move.blue+=1;
//     console.log(`console.log ${move.red}`);
//     setmoves((previous)=>{
//         return {...previous, red:previous.red+1}

//     })
//   }
//   return (
//     <div>
//       <p>Game begins</p>
//       <div className="board">
//         <p>Blue Moves={move.blue}</p>
//         <button style={{backgroundColor:"blue"}} onClick={updatemove}>+1</button>
//         <p>Yellow Moves= {move.yellow}</p>
//         <button style={{backgroundColor:"yellow", color:"black"}}>+1</button>
//         <p>Green Moves= {move.green}</p>
//         <button style={{backgroundColor:"green"}}>+1</button>
//         <p>Red Moves={move.red}</p>
//         <button style={{backgroundColor:"red"}} onClick={updateove}>+1</button>
//       </div>
//     </div>
//   );
// }
