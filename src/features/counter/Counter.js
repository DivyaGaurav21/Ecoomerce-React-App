
import { useSelector, useDispatch } from "react-redux"
import { decrement, increment } from "./counterSlice"

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() =>  dispatch(increment()) }>+</button>
            <span>Count : {count}</span>
            <button onClick={() =>  dispatch(decrement()) }>-</button>
      </div>
  )
}

export default Counter