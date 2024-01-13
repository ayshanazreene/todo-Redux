import React from 'react'
import ListItem from './ListItem'
import { useSelector } from 'react-redux';

function ListRender() {
    const tasks= useSelector((state)=>state.taskReducer.taskArray)
    console.log(tasks);
    const taskRender= tasks.map((item)=><ListItem {...item}/>)
  return (
    
    <div>{taskRender}</div>
  )
}

export default ListRender