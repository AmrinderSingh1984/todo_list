import React, { useState } from 'react'

const MyForm = () => {

    const [arr,setArr]=useState([])

    const add=()=>{
        let t=document.getElementById("task").value;
        let d=document.getElementById("descp").value;

        if(t=='' || d==''){
          return;
        }

        let newTask={
            task:t,
            descp:d
        }
        setArr([...arr,newTask]);
        document.getElementById("task").value='';
        document.getElementById("descp").value='';
    }

    const remove=(i)=>{
      const newArray = [...arr];
    newArray.splice(i, 1);
    setArr(newArray);
    }
   
  return (
    <>
    <div className='main'>
      <h3>TODO List</h3>
        <p className='ent'>Task</p>
        <input className='inp' id='task' type="text" placeholder='Task'/>
        <p className='ent'>Description</p>
        <textarea  id="descp" className='inp' cols="30" rows="6" placeholder='Description'></textarea>
        <br />
        <button className='btn' onClick={add}>ADD</button>
    </div>
    <hr />
  <div className="container">
      <h4 className='heading'>Task List</h4>
      {arr.map((arrElment,i)=>( <p className='task'>
      <h4 className='tname'>{arrElment.task}</h4>
      <p className='detail'>{arrElment.descp}</p>
      <button className='remove' onClick={()=>{remove(i)}}>Remove</button>
    </p>))}
  </div>
    </>   
  )
  }


export default MyForm;