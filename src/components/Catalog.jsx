import React from 'react';
import './Catalog.css';
import { useState } from 'react';

export default ({name, price, onSelect}) => {
    const [selected, setSelected] = useState(false);

    let formatPrice = (price) => {
        return `R$ ${price}`;
    }

    let handleSelect = () => {
        onSelect({name, price, selected});
        setSelected(!selected)
    }

    return (
        <div>
            <div className={selected ? 'catalog active' : 'catalog'} onClick={handleSelect}>
                <div class="option">{name}</div>
                <div class="price">{formatPrice(price)}</div>
            </div>
        </div>
    )
}