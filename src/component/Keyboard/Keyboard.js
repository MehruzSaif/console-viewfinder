import React from 'react';
import './Keyboard.css';

const Keyboard = (props) => {
    const { img, name, price } = props.keyboard;

    return (
        <div className='keyboard'>
            <img src={img} alt="" />
            <p className='keyboard-name'>{name}</p>
        </div>
    );
};

export default Keyboard;