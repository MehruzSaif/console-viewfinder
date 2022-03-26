import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React from 'react';
import './Cart.css';

const Cart = ({ selected }) => {

    const selectOne = keyboard => {

        if (keyboard.length) {
            const randomKeyboard = Math.round(Math.random() * (keyboard.length - 1));
            console.log(randomKeyboard);
            const text = keyboard[randomKeyboard].name + "Recommended for you";
            alert(text);
        }
        else {
            alert("❌ Select at least one keyboard.");
        }
    }


    return (
        <div className='cart'>

            <h3 className='selected-h3'>Selected Keyboard</h3>
            {
                selected.map(keyboard => <h3 key={keyboard.id}>
                    {keyboard.name}
                </h3>)
            }
            <button onClick={() => selectOne(selected)} className='btn-cart1'>Choose 1 For Me</button>
            <br />
            <button className='btn-cart2'>Choose Again</button>
        </div>
    );
};

export default Cart;