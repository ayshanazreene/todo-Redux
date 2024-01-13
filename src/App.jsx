
import './App.css'
import taskSlice, { addNewTask, clearAll } from './redux/taskSlice'
import { store } from './redux/store'
import { useDispatch, useSelector } from 'react-redux'
import ListRender from './Component/ListRender'


function App() {
 

    const dispatch=useDispatch()
    const count= useSelector((state)=>state.taskReducer.countComplete)

  return (
    <>

      <div className="row" style={{ backgroundColor: 'orange', height: '100vh' }} >
        <div className="col-lg-4"></div>
        <div className="col-lg-4 border-2  mt-5 rounded-3 shadow" style={{ width: '500px', height: '80vh',backgroundColor:'#FA9C1B' }}>
          <h1 className='text-center m-3'>Todo List App</h1>

          <div className='d-flex align-items-center border rounded-3 boxShadow ' style={{ width: '450px', height: '100px' }}>

            <input className='ms-3 ' type="text" name="" style={{ width: '250px', height: '40px' }} id="textBox"  />

            <button className='fs-5  text-center ' style={{ width: '150px', height: '40px', backgroundColor: 'purple' }} onClick={()=>dispatch(addNewTask({payload:document.getElementById('textBox').value}))}> Add New Task</button>

          </div>
          <ul className='fw-bolder' style={{ width: '420px', listStyle:'none' }}>
           <ListRender/>
          </ul>
          <div><span className='fw-bolder'>Total No.of completed items: </span>{count}</div>
          <button className='text-center mt-3' onClick={()=>dispatch(clearAll())} style={{ width: '100px', height: '30px', backgroundColor: 'purple' }} > Clear All</button>
        </div>
        <div className="col-lg-4"></div>
      </div>

     
    </>
  )
}

export default App
