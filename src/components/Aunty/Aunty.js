import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [house, setHouse] = useContext(RingContext);
    const handleHouseIncrease = () =>{
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <div>
             <h2>aunty</h2>
             <p>house: {house}</p>
             <button onClick={handleHouseIncrease}>Aunty magic</button>
        </div>
    );
};

export default Aunty;