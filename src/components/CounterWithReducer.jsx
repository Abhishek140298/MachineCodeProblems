import React ,{useReducer} from 'react'

const initialState={
    count:0
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'Increment':
            return{count:state.count +1}
      case "decrement":
      return {
        count: state.count - 1
      };

    case "reset":
      return initialState;

    default:
      return state;
  }

    }



const COunterWithReducer=()=>{
const [state,dispatch]=useReducer(reducer,initialState)

    return (<div>
        <h1>Coounter Value {state.count}</h1>
        <button onClick={()=>dispatch({type:'decrement'})}>-</button>
        <button onClick={() =>
          dispatch({ type: "reset" })
        }>Reset</button>
        <button  onClick={() =>
          dispatch({ type: "increment" })
        }>+</button>
    </div>)
}