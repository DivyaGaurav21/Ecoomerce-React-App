import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Cardsdata from '../CardsData'
import "./Style.css";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';
import Ratings from './Ratings';

import { useDispatch } from 'react-redux';



import { addCart } from '../store/cartSlice';

const Cards = () => {

    const dispatch = useDispatch();

    const [data, setData] = useState(Cardsdata);
    // console.log(data);


    // const dispatch = useDispatch();

// --------Function for Add to Cart-------------------//
    const addCartHandle = (element) => {
        // ======Add this element in redux store======//
        dispatch(addCart(element));

    }


    

    return (
        <div className='container mt-2'>
            <div className="row d-flex justify-content-center align-items-center">
                {
                    data.map((element, id) => {
                        return (
                            <>
                                <Card key={ id } style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                                    <Card.Img variant="top" src={element.imgdata} style={{ height: "16rem" }} className="mt-3" />
                                    <Card.Body>
                                        <Card.Title>{element.rname}</Card.Title>
                                        <Card.Text>
                                            <div className="price-rating d-flex justify-content-between">
                                                Price : ₹ {element.price}
                                                <Ratings value={element.rating} />
                                            </div>
                                            <div>
                                                <small>Overview : {element.somedata }</small>
                                            </div>
                                        </Card.Text>
                                        <div class="row">
                                            <div class="col-8">
                                                <Button variant="danger"
                                                    onClick={()=> addCartHandle(element)}
                                                    className='col-lg-12 btn'>Add to Cart</Button>
                                            </div>
                                            <div class="col-4 d-flex justify-content-between align-items-center">
                                                <DeleteIcon />
                                                <ModeEditTwoToneIcon/>
                                            </div>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Cards