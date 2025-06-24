import React, { useContext, useReducer, useState } from 'react';
import { ThemeContext } from './context';
const counterReducer = (state, action) => {
    console.log(state);
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};
function Counter() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });
    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </div>
    );
}

export function Status(){
    
    const [text, setText] = useState('')
    const [texts,setTexts] = useState([])
    
  const setUserData = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, { name: action.payload, status: false }]
        case 'CHANGE':
            return state.map((item, index) => {
                if (index === action.payload.idx) {
                return { ...item, status: action.payload.checked }
                }
                return item
            })
        default:
            return state
    }
}

    const data = [{
        name:"king",
        status:false
    }]
    const [state, dispatch] = useReducer(setUserData, data)

    return (
        <div>
            {state.map((val,idx) => {
                return(
                    <div>
                    <p>{val.name}</p>
                    <input onChange={(e) => {dispatch({type:'CHANGE',payload:{idx:idx,checked:e.target.checked}})}} type="checkbox" name="status" id=""  />
                    <label htmlFor="status">onlice</label>
                    <p>{val.status?'ture':'false'}</p>
                    </div>
                )
            })}
            <input onChange={(e)=>setText(e.target.value)} type="text" />
            <button onClick={() => {dispatch({type:'ADD',payload:text})}}>submit</button>
        </div>
    )
}

export function DarkTheme(){
    const theme = useContext(ThemeContext)
    let color = 'white'
    if (theme === 'dark')
        color = 'black'
    return (
        <div>
            <div style={{width:'200px',height:'200px',backgroundColor:color}}></div>
        </div>
    )
}

export default Counter;