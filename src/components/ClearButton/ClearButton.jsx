import React from 'react';
import './ClearButton.css'

const ClearButton = ({ clear }) => (
    <div className= "clearBtn" onClick={clear}>
        <span>CLEAR</span>
    </div>
)

export default ClearButton;