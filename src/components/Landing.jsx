import React from 'react';
import './Landing.css';

export default ({ title, subtitle }) => (
    <div className="landing">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
    </div>
)