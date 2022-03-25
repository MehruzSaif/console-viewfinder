import React, { useEffect, useState } from 'react';
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
                <h2>This is for products: {keyboards.length}</h2>
            </div>

            <div className="cart-container">
                <h3>Selected Keyboard</h3>
            </div>
        </div>
    );
};

export default Choose;