import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ selected }) => {

    const [selectedKeyboard, setSelectedKeyboard] = useState([]);
    const totalKeyboard = selected.length;
    let total = 0;

    for (const keyboard of selected) {
        total = total + keyboard.price;
    }

    const handleChooseBtn = () => {
        const getRandomInt = (max) => {
            return Math.floor(Math.random() * max);
        };
        const selectedKeyboardIndex = getRandomInt(selected.length);
        setSelectedKeyboard(selected[selectedKeyboardIndex]);
        console.log(selectedKeyboard);
    };
    const handleRechooseBtn = () => {
        window.location.reload();
    };



    /*  const selectOne = keyboard => {
 
         if (keyboard.length) {
             const randomKeyboard = Math.round(Math.random() * (keyboard.length - 1));
             // console.log(randomKeyboard);
             const text = keyboard[randomKeyboard].name + " recommended for you";
             alert(text);
         }
         else {
             alert("❌ Select at least one keyboard.");
         }
     } */


    return (
        <div className='cart'>

            <h5 className='selected-h3'>Selected Keyboard</h5>
            <div className='selected-name'>
                <p>Total Keyboards: {totalKeyboard}</p>
                {
                    selected.map((keyboard) => <div className='cart-keyboard' key={keyboard.id}>
                        <img className='custom-cart-img1' src={keyboard.img} alt="" />
                        <p className='cart-text'>{keyboard.name}</p>
                    </div>)
                }
            </div>

            <button onClick={handleChooseBtn} className='btn-cart1'>Choose 1 For Me</button>
            {selectedKeyboard.id && (
                <div>
                    <img className="custom-cart-img" src={selectedKeyboard.img} alt="" />
                    <p><b>{selectedKeyboard.name}</b></p>
                </div>
            )}
            <br />
            <button onClick={handleRechooseBtn} className='btn-cart2'>Choose Again</button>
        </div>
    );
};

export default Cart;