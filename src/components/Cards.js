import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "./Style.css";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';
import Ratings from './Ratings';
// import { useNavigate } from 'react-router-dom'

// ---------spinner loading-------------//
import LoadSpinner from './footer/Spinner';

import { useDispatch } from 'react-redux';
// // -------get cart item from store---------------------//
import { useSelector } from 'react-redux';

import { deleteCardData } from '../store/productSlice';





import { addCart } from '../store/cartSlice';
import SortByPrice from './SortByPrice';

const Cards = () => {

  
    const dispatch = useDispatch();
    // const navigate = useNavigate()

    const cardsData = useSelector(state => state.products.data);
    const loading = useSelector(state => state.products.loading);
    const data = cardsData;

    // --------Function for Add to Cart-------------------//
    const addCartHandle = (element) => {
        // ======Add this element in redux store======//
        dispatch(addCart(element));
    }



        // const cardsDetailsView = (element) => {
        //     navigate(`/productdetails/${element.id}`)
        // }
     
    const deleteItemHandler = (element) => {
        dispatch(deleteCardData(element.id))
    // console.log(element)
    }
    

    return (
        
        !loading ? (
            <div className='container mt-2'>
                <div><SortByPrice/></div>
                <div className="row d-flex justify-content-center align-items-center">
                    {
                        data.length > 0 && data.map((element, id) => {
                            return (
                            
                                <Card key={element.id} style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                                    <Card.Img variant="top" src={element.imgdata} style={{ height: "16rem" }} className="mt-3" />
                                    <Card.Body>
                                        <Card.Title>{element.rname}  <small style={{ fontSize: 15, color: "grey" }}>{element.name}</small></Card.Title>
                                        <Card.Text>
                                            <div className="price-rating d-flex justify-content-between">
                                                Price : ₹ {element.price}
                                                <Ratings value={element.rating} />
                                            </div>
                                            <div>
                                                ☞ <small>{element.somedata}</small>
                                            </div>
                                        </Card.Text>
                                        <div className="row">
                                            <div className="col-8">
                                                <Button variant="danger"
                                                    onClick={() => addCartHandle(element)}
                                                    className='col-lg-12 btn'>Add to Cart</Button>
                                            </div>
                                            <div className="col-4 d-flex justify-content-between align-items-center">
                                                <DeleteIcon onClick={() => deleteItemHandler(element)} />
                                                <ModeEditTwoToneIcon />
                                            </div>
                                        </div>

                                    </Card.Body>
                                </Card>
                        
                            )
                        })
                    }

                </div>
            </div>
        ) : <LoadSpinner/>
        )
 }


export default Cards

