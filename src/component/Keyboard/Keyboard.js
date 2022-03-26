import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Keyboard.css';

const Keyboard = ({ handleAddToSelected, keyboard }) => {
    // const { handleAddToSelected, keyboard } = props;

    const { img, name, price } = keyboard;

    return (
        <div className='keyboard'>
            <img src={img} alt="" />

            <div className='keyboard-info'>
                <p className='keyboard-name'>{name}</p>
                <p className='keyboard-price'>Price: ${price}</p>
            </div>

            <button onClick={() => handleAddToSelected(keyboard)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Keyboard;