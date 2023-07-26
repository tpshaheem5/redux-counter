import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from '../redux/counterSlice'


function Counter() {
    const list = useSelector((state)=>state.counter)
    const dispach = useDispatch()
    const inc =()=>{
        dispach(increment())
    }
    const de= ()=>{
        dispach(decrement())
    }
  return (
    <div>
        <h1>{list}</h1>
        <button onClick={inc}>+</button>
        <button onClick={de}>-</button>
    </div>
  )
}

export default Counter