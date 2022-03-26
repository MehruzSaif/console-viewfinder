import React from 'react';

const Cart = ({ selected }) => {
    return (
        <div>
            <h3>Selected Keyboard</h3>
            <p>Selected Items: {selected.length}</p>
        </div>
    );
};

export default Cart;