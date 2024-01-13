import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, taskComplete,taskCompleteUnchecked } from '../redux/taskSlice'



function ListItem(insideItem) {

    const dispatch=useDispatch()
    console.log(insideItem);
    
    if(!insideItem.deleted)
    return (
        <>
        
            <li className=' border w-100 rounded m-1' key={insideItem.index}>
                <div className='d-flex m-2 justify-content-between'>
                    <input type="checkbox" name="todoTask" id="" onChange={()=>{
                         if(event.target.checked)
                            dispatch(taskComplete({payload:insideItem.id}))
                        else
                        dispatch(taskCompleteUnchecked({payload:insideItem.id}))
                        }}/>
                    <div className='ms-3'>{insideItem.taskName}</div>
                    <button className='text-center' onClick={()=>dispatch(deleteTask({payload:insideItem.id}))} style={{ width: '100px', height: '30px', backgroundColor: 'red' }}> <i class="fa-solid fa-trash"></i>Delete</button>
                </div>
            </li>
        
        </>
    )
    else
    return(<></>)
}

export default ListItem