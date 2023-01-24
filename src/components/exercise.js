import React, { useState } from "react"

function List (){
const [val, setVal] = useState('');
const [todo, setTodo] = useState([]);


const handleChange = (e) =>{
  setVal(e.target.value);
}

const addTodo=()=>{
if(val !== " "){
  const todoDetails = {
    id: Math.floor(Math.random() * 1000) ,
    value: val,
    isCompleted: false
  }
  setTodo([...todo, todoDetails]);
}
}

  return(<>
    <div>
<input type="text" placeholder="add your todo" onChange={(e)=>handleChange(e)}/>
<button onClick={addTodo}> Add </button>
    </div>
    <div className='list'>
      {todo !== [] ?
      <ul>
{todo.map((t)=>(
  <li>{t.value}</li>
))}
      </ul>
    : null
    }

    </div>
  </>)
}

export default List;



