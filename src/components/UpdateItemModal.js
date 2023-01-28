import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';
import { updateCardDataSuccess } from '../store/productSlice';
import { useDispatch } from 'react-redux';

function UpdateItemModal(props) {
    const toBeUpdateElement = props.updateitem;

    const dispatch = useDispatch()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // state to manage details of product 
    // const [addItem, setAddItem] = useState(true)
    const [rname, setrName] = useState(toBeUpdateElement.rname)
    const [name, setName] = useState(toBeUpdateElement.name)
    const [price, setPrice] = useState(toBeUpdateElement.price)
    const [rating, setRating] = useState(toBeUpdateElement.rating)
    // const [description, setDescription] = useState(item.description)

    const onSaveUpdateHandler = (e) => {
        e.preventDefault();
        const updateObject = {
            ...toBeUpdateElement,
            rname: rname,
            name: name,
            price: price,
            rating:rating
        }
        dispatch(updateCardDataSuccess(updateObject));
        handleClose();
    }

    return (
        <>
            <ModeEditTwoToneIcon className='text-primary' onClick={handleShow} />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className='text-light bg-danger'>
                    <Modal.Title className='ms-auto'>Update Your Receipy Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="update-modal__flex">
                        <small>Restorent name</small>
                        <input type="text" value={rname} onChange={(e) => setrName(e.target.value) } />
                        <small>Receipy name</small>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                        <small>price : ₹</small>
                        <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} />
                        <small>rating</small>
                        <input type="text" value={rating} onChange={(e)=>setRating(e.target.value) } />
                </div>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-between'>
                    <Button variant="success" onClick={onSaveUpdateHandler}>Save Changes</Button>
                    <Button variant="danger" onClick={handleClose}> Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UpdateItemModal



