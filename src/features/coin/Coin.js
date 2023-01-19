
import { useSelector } from "react-redux"

const Coin = () => {
    const count = useSelector((state) => state.counter.count)
  return (
      <div>
          <span id='op'>Coin : {count}</span>
    </div>
  )
}

export default Coin