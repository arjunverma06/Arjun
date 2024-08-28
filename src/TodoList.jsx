// import { useState } from "react";
// import { v4 as uuidv4 } from 'uuid';
// export default function TodoList() {
//     let[todos,settodos]=useState([{
//         task:"sample task",id:uuidv4(),
//         isdone:false,
//     }]);
//     let [newTodo,setnewTodo]=useState("");
//     let newtask=()=>{
//         settodos((prevtodos)=>{
//             return [...prevtodos,{task:newTodo,id:uuidv4(),isdone:false}];
//         }); 
//         setnewTodo("");
//     };
//     let upadtevalue=(event)=>{
//         setnewTodo(event.target.value);
//         // console.log(event.target.value);
//     };
//     let tododelete=(id)=>{
//         settodos((prevtodo)=>todos.filter((prevtodo)=>prevtodo.id!=id));
       
//     }
//     let upparcase=()=>{

//        settodos( todos.map((todo)=>{
//         return{
//             ...todo,
//             mark:todo.id.toUpperCase(),
//         }
//         }));
//         // console.log(newarr)
//     }
//     let markasdone=(id)=>{
//         settodos((prev)=>prev.map((todo)=>{
//             if(todo.id==id){
//             return{
//                 ...todo,
//                 isdone:true,
//                 // task:todo.task.toUpperCase(),
//             }}
//             else{
//                 return todo;
//             }
//             }
//         ));
//     }
//     return(
//        <div>
//         <input placeholder="add a task" value={newTodo} onChange={upadtevalue}></input>
//         <button onClick={newtask}>Add Task</button>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <hr></hr>
//         <h4>Todo List</h4>
//         <ul>
//             {
//                 todos.map((todo)=>(
//                  <li key={todo.id}><span style={todo.isdone ? {textDecorationLine:"line-through"} : null}>{todo.task}</span> 
//                  &nbsp; &nbsp;
//                  <button onClick={()=>tododelete(todo.id)}>Delete</button>
//                  <button onClick={()=>markasdone(todo.id)}>Marks as a done</button>
//                  </li>
//                 ))
//             }

//         </ul>
//         <button onClick={upparcase}>create to all marks</button>
//        </div>
//     );
// }