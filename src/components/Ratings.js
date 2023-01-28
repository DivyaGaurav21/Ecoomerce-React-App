import { Rating } from '@mui/material'
import React from 'react'

const Ratings = ({ value }) => {
    value = +value;
    return (
        //  this is the material UI Rating 
        <Rating
            name="simple-controlled"
            value={value ? value : 0}
        />
    )
}

export default Ratings