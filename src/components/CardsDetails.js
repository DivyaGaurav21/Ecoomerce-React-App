import React from 'react'
//----------importing Bootstrap Table Component-----------//
import Table from 'react-bootstrap/Table'
//----------import Rating--------------------------------//
import Ratings from './Ratings'

// -------get cart item from store---------------------//
// import { useSelector } from 'react-redux';

const CardsDetails = (props) => {
    // -------now subscribe the data(added to cart data) --------------//
    // const items = useSelector((state) => state.cart)
console.log('in card detail' , props.id)

  return (
      <div className='container mt-3 '>
          <h3 className='text-center text-light'>Item Details</h3>
          <section className='container mt-2'>
              <div className="itemsdetails">
                  <div className="items__img">
                      <img src="https://b.zmtcdn.com/data/pictures/chains/1/113401/59f29399060caefcc575d59dc9402ce8_o2_featured_v2.jpg" alt="" />
                  </div>

                  {/* table for item description  */}
                  <div className="details">
                      <Table>
                          <tr>
                              <td style={{color:"#fff"}}>
                                  <p> <strong>Restaurant</strong>  : Jugaadi Adda </p>
                                  <p> <strong>Price</strong>  : ₹ 325</p>
                                  <p> <strong>Dishes</strong>  : North Indian, Biryani, Mughlai</p>
                                  {/* <p> <strong>Total</strong>  :₹  600 </p> */}
                                  {/* <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                                      <span style={{ fontSize: 24 }} onClick={ele.qnty <= 1 ? () => dlt(ele.id) : () => remove(ele)}>-</span>
                                      <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                                      <span style={{ fontSize: 24 }} onClick={() => send(ele)}>+</span>

                                  </div> */}

                              </td>
                              <td style={{ color: "#fff" }}>
                                  <p><strong>Rating :</strong> <Ratings value="3"/></p>
                                  <p><strong>Order Review :</strong> <span >1175+ order placed from here recently</span></p>
                                  <p><strong>Remove :</strong> <span ><i className='fas fa-trash' style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i>	</span></p>
                              </td>
                          </tr>
                      </Table>
                  </div>
              </div>
          </section>
    </div>
  )
}

export default CardsDetails