import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { sortOblect } from '../store/productSlice';
import { fetchCardsData } from '../store/productSlice';


const SortByPrice = () => {

    // // satte to set if sort is true or not 
    const [flag, setFlag] = useState(false);
   
    const dispatch = useDispatch();

    // // function to sort products according to price 
    function handleSort() {
        dispatch(sortOblect())
        setFlag(true);
    }

    // remove sorting 
    function cancelSort() {
        dispatch(fetchCardsData())
        setFlag(false);
    }


    return (

        <div className="sortitemsbtn">
            <span className='sortSpan'>
                {/* sort button */}
                <span onClick={() => handleSort()}> Sort by Price </span>
                {flag && (
                    <span id='cross' onClick={() => cancelSort()}>
                        ✕
                    </span>
                )}

            </span>

        </div>

    )
}

export default SortByPrice