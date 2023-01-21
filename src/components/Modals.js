import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



//----------importing Bootstrap Table Component-----------//
import Table from 'react-bootstrap/Table'
//----------import Rating--------------------------------//
import Ratings from './Ratings'


// -------get cart item from store---------------------//
import { useSelector } from 'react-redux';

// ------------dispath function import ------------------//
import { useDispatch } from 'react-redux';
// ----------Import remove Item Reducer Func-------------//
// -----------Import decreaseItem Reducer Func-------------//
// -----------Import addCart Reducer Func-------------//
import { removeFromCart, decreaseCart, addCart } from '../store/cartSlice';





function MyVerticallyCenteredModal(props) {

    // -------now subscribe the data(added to cart data) --------------//
    const cart = useSelector((state) => state.cart);
    // -----------dispatch function --------------//
    const dispatch = useDispatch();

    // ----------Function for deleteItem from Cart-----------//
    const removeCartHandler = (element) => {
        dispatch(removeFromCart(element));
    }
    // -----------Function for decrease Cart Item-------------//
    const decreaseCartItemHandle = (element) => {
        dispatch(decreaseCart(element))
    }
    // -----------Function for increase Cart Item-------------//
    const increaseCartItemHandle= (element) => {
        dispatch(addCart(element))
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton className='bg-danger text-light'>
                <Modal.Title id="contained-modal-title-vcenter" className='ms-auto'>
                  <span>Number of Items : </span>
                     {cart.cartItems.length}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                 {
                    cart.cartItems.map(element => {
                        return (
                        <div key={element.id}>
                                <section className='container mt-1'>
                                     <div className="itemsdetails">
                                         <div className="items__img">
                                            <img src={element.imgdata} alt="" />
                                         </div>

                                         {/* table for item description  */}
                                       <div className="details">
                                          <Table>
                                             <tr>
                                                     <td style={{ color: "#fff" }}>
                                                         <p> <strong>Restaurant</strong>  : {element.rname} </p>
                                                         <p> <strong>Price</strong>  : ₹ {element.price}</p>
                                                        
                                                        <p> <strong>Total</strong>  :₹  {element.price * element.qnty} </p>
                                                        <div className='mt-2 d-flex justify-content-between align-items-center' style={{ width: 90, height:30, borderRadius: 40, cursor: "pointer", background: "#ddd", color: "#111" }}>
                                                             <span style={{ fontSize: 24 }} onClick = {() => decreaseCartItemHandle(element)}>−</span>             
                                                            <span style={{ fontSize: 24 , color:'red' }}>{element.qnty}</span>
                                                             <span style={{ fontSize: 24 }} onClick = {()=> increaseCartItemHandle(element)}>+</span>
                                                         </div>
                                                     </td>
                                                     <td style={{ color: "#fff" }}>
                                                         <p><strong>Rating :</strong> <Ratings value="3" /></p>
                                                         <p> <strong>Dishes</strong>  : {element.address}</p>
                                                        <p onClick={() => removeCartHandler(element)}><strong>Remove :</strong> <span ><i className='fas fa-trash' style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i>	</span></p>
                                                     </td>
                                                 </tr>
                                             </Table>
                                         </div>
                                     </div>
                                 </section>
                         </div>
                         )
                     })
                 }
            </Modal.Body>
            <Modal.Footer>
                <h1>Total Amount : ₹ { cart.cartTotalAmount }</h1>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;