import React, { useState } from 'react'
// ----------importing related css-----------//
import './AddProduct.css'

// ==========importing useDispatch and use Navigate==========//
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// _________addCardDataSuccess function from product slice_________//
import { addCardDataSuccess } from '../../store/productSlice';


// ________******* Main Add Product Component function ****___________//
const AddProduct = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

// __________useState for reflect Change in input data_______________//
    const [itemName, setItemName] = useState('');
    const [restore, setRestoreName] = useState('');
    const [address, setAddress] = useState('');
    const [price, setPrice] = useState('');
    const [urlImage, setUrlImage] = useState('');

// -----------Functin For Handle Submit Action--------------//
    function handleSubmit(event) {
        event.preventDefault();

        let formData = {
            id: Date.now(),
            name: itemName,
            rname: restore,
            imgdata: urlImage,
            address: address,
            somedata: "overview will update !! new Item",
            price: price,
            rating: "3",
            overview: "Menu is extensive and seasonal to a particularly high standard. Definitely fine dining. It can be expensive but worth it and they do different deals on different nights so it’s worth checking them out before you book. Highly recommended.",
            qnty:0   
        }
        // ________we send this form data as action payload_________//
        dispatch(addCardDataSuccess(formData))
        // console.log(formData)
        navigate("/")
    }


    return (
        <div>
            <h4 className='text-danger text-center mt-2 mb-3'>Add Your Restorent Receipies to Sell </h4>
            <div className='d-flex justify-content-center w-100'>
                {/* form and input with on change function  */}
                <form className='addproduct-form' onSubmit={handleSubmit}>
                    <input type="text" placeholder="Write your receipy name" onChange={(e) => setItemName(e.target.value)} required />
                    <input type="text" placeholder="Write your Restaurent name" onChange={(e) => setRestoreName(e.target.value)} required/>
                    <input type="text" placeholder="your Restaurent address..?" onChange={(e) => setAddress(e.target.value)} required/>
                    <input type="text" placeholder="set price of item.. ₹" onChange={(e) => setPrice(e.target.value)} required />
                    <input type="text" placeholder='Image URL' onChange={(e) => setUrlImage(e.target.value)} />
              
              <button type="submit" class="btn modal-btn">Add a New Receipy</button>
          </form>
    </div>
        </div>
  )
}

// __________________export this component_____________//
export default AddProduct