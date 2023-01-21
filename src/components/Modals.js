import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


//----------importing Bootstrap Table Component-----------//
import Table from 'react-bootstrap/Table'
//----------import Rating--------------------------------//
import Ratings from './Ratings'


// -------get cart item from store---------------------//
import { useSelector } from 'react-redux';


function MyVerticallyCenteredModal(props) {

    // -------now subscribe the data(added to cart data) --------------//
    const items = useSelector((state) => state.cart.cartItems);

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
                     {items.length}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                 {
                    items.map(element => {
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
                                                        
                                                        <p> <strong>Total</strong>  :₹  600 </p>
                                                        <div className='mt-2 d-flex justify-content-between align-items-center' style={{ width: 90, height:30, borderRadius: 40, cursor: "pointer", background: "#ddd", color: "#111" }}>
                                                             <span style={{ fontSize: 24 }} >−</span>             
                                                            <span style={{ fontSize: 24 , color:'red' }}>{element.qty}</span>
                                                             <span style={{ fontSize: 24 }}>+</span>
                                                            {/* <span style={{ fontSize: 24 }} onClick={ele.qnty <= 1 ? () => dlt(ele.id) : () => remove(ele)}>-</span>
                                                            <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                                                           <span style={{ fontSize: 24 }} onClick={() => send(ele)}>+</span> */}
                                                          </div>
                                                     </td>
                                                     <td style={{ color: "#fff" }}>
                                                         <p><strong>Rating :</strong> <Ratings value="3" /></p>
                                                         <p> <strong>Dishes</strong>  : {element.address}</p>
                                                         <p><strong>Remove :</strong> <span ><i className='fas fa-trash' style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i>	</span></p>
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
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;