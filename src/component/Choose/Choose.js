import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Keyboard from '../Keyboard/Keyboard';
import './Choose.css';

const Choose = () => {
    const [keyboards, setKeyboards] = useState([]);

    const [selected, setSelected] = useState([]);

    useEffect(() => {
        fetch('keyboards.json')
            .then(res => res.json())
            .then(data => setKeyboards(data))
    }, []);

    const handleAddToSelected = (keyboard) => {
        // console.log(keyboard);
        const newSelected = [...selected, keyboard];

        if (newSelected.length > 4) {
            alert('❌ You can select only 4 keyboards.')
        }
        else {
            setSelected(newSelected);
        }
    }

    return (
        <div className='choose-container container'>
            <div className="keyboards-container">
                {
                    keyboards.map(keyboard => <Keyboard
                        key={keyboard.id}
                        keyboard={keyboard}
                        handleAddToSelected={handleAddToSelected}
                    ></Keyboard>)
                }
            </div>

            <div className="selected-container">
                <Cart selected={selected}></Cart>
            </div>
        </div>
    );
};

export default Choose;