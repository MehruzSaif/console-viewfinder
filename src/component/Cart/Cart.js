import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React from 'react';
import './Cart.css';

const Cart = ({ selected }) => {

    const selectOne = keyboard => {

        if (keyboard.length) {
            const randomKeyboard = Math.round(Math.random() * (keyboard.length - 1));
            // console.log(randomKeyboard);
            const text = keyboard[randomKeyboard].name + " recommended for you";
            alert(text);
        }
        else {
            alert("❌ Select at least one keyboard.");
        }
    }


    return (
        <div className='cart'>

            <h5 className='selected-h3'>Selected Keyboard</h5>
            {
                selected.map(keyboard => <h5 key={keyboard.id}>
                    {keyboard.name}
                </h5>)
            }
            <button onClick={() => selectOne(selected)} className='btn-cart1'>Choose 1 For Me</button>
            <br />
            <button className='btn-cart2'>Choose Again</button>
        </div>
    );
};

export default Cart;