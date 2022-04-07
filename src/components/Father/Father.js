import React from 'react';
import Brother from '../Brother/Brother';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';

const Father = ({house, ornament}) => {

    return (
        <div>
            <h2>this is my Father</h2>
            <p>house: {house}</p>
            <MySelf  house= {house}></MySelf>
            <Brother house= {house} ></Brother>
            <Sister  house= {house}></Sister>
        </div>
    );
};

export default Father;