import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {increment} from '../Service/Counter'

const Test = () => {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch();
  return (
    <>

    <div className='text-[8rem]'>{count}</div>
    <button onClick={()=>dispatch(increment())}>Click me</button>
    

    </>
  )
}

export default Test