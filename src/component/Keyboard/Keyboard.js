import React from 'react';
import './Keyboard.css';

const Keyboard = (props) => {
    const { img, name, price } = props.keyboard;

    return (
        <div className='keyboard'>
            <img src={img} alt="" />

            <div className='keyboard-info'>
                <p className='keyboard-name'>{name}</p>
                <p className='keyboard-price'>Price: ${price}</p>
            </div>

            <button className='btn-cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Keyboard;