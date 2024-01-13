import { createSlice } from "@reduxjs/toolkit";


const taskSlice=createSlice({

    name:'task', //name of slice
    initialState:{
        countComplete:0,
        taskArray:[],
        newTask:{id:'',checked:false,taskName:'', deleted:false,color:'#FA9C1B'}

    },
    reducers:{
        addNewTask:(state,action)=>{
            state.newTask.taskName=action.payload.payload
            state.newTask.id=state.taskArray.length
            // console.log(state.newTask);
            state.taskArray=[...state.taskArray,state.newTask]
            // console.log(state.taskArray);
        },
       
        deleteTask:(state,action)=>{
           state.taskArray[action.payload.payload].deleted=true 
           if(state.taskArray[action.payload.payload].checked){
                 state.countComplete-=1

           }
        },
        taskComplete:(state,action)=>{
            state.taskArray[action.payload.payload].checked=true
            state.taskArray[action.payload.payload].color='green'
            state.countComplete+=1
        },
        taskCompleteUnchecked:(state,action)=>{
            state.taskArray[action.payload.payload].checked=false
            state.taskArray[action.payload.payload].color='#FA9C1B'
            state.countComplete-=1
        },
        clearAll:(state)=>{
            state.countComplete=0
            state.taskArray=[]
            state.newTask={id:'',checked:false,taskName:'', deleted:false}
        }
    }

})

export const {deleteTask,taskComplete,taskCompleteUnchecked,addNewTask,clearAll}=taskSlice.actions
export default taskSlice.reducer