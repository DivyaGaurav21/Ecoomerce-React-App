import React from 'react'
//----------importing Bootstrap Table Component-----------//
import Table from 'react-bootstrap/Table'
//----------import Rating--------------------------------//
import Ratings from './Ratings'

//___importing useDispatch and useSelector from react-redux___//
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
//_______import addCart Fn from Cart Slice_________________//
import { addCart } from '../store/cartSlice';
// ___________similar Item Component_____________________//
import SimilarItem from './footer/SimilarItem';

// +++++++++++++++++ Main CardsDetails Comp +++++++++++++++++++//
const CardsDetails = (props) => {
    const dispatch = useDispatch();


    // -------now subscribe the data(added to cart data) --------------//
    const viewItm = useSelector((state) => state.products.itemToDisplay)



    // --------Function for Add to Cart-------------------//
    const addCartHandle = (element) => {
        // ======Add this element in redux store======//
        dispatch(addCart(element));
    }
    

  return (
      <div className='container mt-3 '>
          <h3 className='text-center text-light'>Item Details</h3>
          <section className='container mt-2'>
              <div className="itemsdetails">
                  <div className="items__img">
                      <img src={viewItm.imgdata} alt="" />
                  </div>

                  {/* table for item description  */}
                  <div className="details">
                      {/* react-bootstap table  */}
                      <Table>
                          <tr>
                              <td style={{color:"#fff"}}>
                                  <p> <strong>Restaurant</strong>  : {viewItm.rname} </p>
                                  <p><small>{viewItm.name }</small></p>
                                  <p> <strong>Price</strong>  : ₹ {viewItm.price }</p>
                                  <p> <strong>Address</strong>  : {viewItm.address}</p>
                              </td>
                              <td style={{ color: "#fff" }}>
                                  <p><strong>Rating :</strong> <Ratings value={viewItm.rating} /></p>
                                  <p><strong>Order Review :</strong> <span >{viewItm.somedata}</span></p>
                                  <p>☟</p>
                                  <button className='carddetailbtn bg-secondary' onClick={() => addCartHandle(viewItm)}>Add To Cart</button>
                              </td>
                          </tr>
                      </Table>
                  </div>
              </div>
          </section>

          <div className='container mt-3 w-75'>
              <p className='text-secondary'>{viewItm.overviwe}</p>
              <h5 className='text-danger text-center mb-3'>Similar Receipies   ☟</h5>
              <SimilarItem/>
          </div>
    </div>
  )
}

export default CardsDetails