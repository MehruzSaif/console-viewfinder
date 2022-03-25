import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { useEffect, useState } from 'react';
import Keyboard from '../Keyboard/Keyboard';
import './Choose.css';

const Choose = () => {
    const [keyboards, setKeyboards] = useState([]);

    useEffect(() => {
        fetch('keyboards.json')
            .then(res => res.json())
            .then(data => setKeyboards(data))
    }, []);

    return (
        <div className='choose-container'>
            <div className="keyboards-container">
                {
                    keyboards.map(keyboard => <Keyboard
                        key={keyboard.id}
                        keyboard={keyboard}
                    ></Keyboard>)
                }
            </div>

            <div className="cart-container">
                <h3>Selected Keyboard</h3>
            </div>
        </div>
    );
};

export default Choose;