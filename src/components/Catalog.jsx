import React from 'react';
import './Catalog.css';
import { useState } from 'react';

export default ({name, price, onSelect}) => {
    const [selected, setSelected] = useState(false);

    let formatPrice = (price) => {
        return `R$ ${price}`;
    }

    return (
        <div>
            <div className='catalog'>
                <div class="option">{name}</div>
                <div class="price">{formatPrice(price)}</div>
            </div>
        </div>
    )
}