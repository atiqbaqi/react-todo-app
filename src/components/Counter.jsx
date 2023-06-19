import React, { useState } from 'react';

const Counter = () => {
    console.log('Counter button rendered');
    const [count, setCount] = useState(0);

    const handleCLick = () => {
        setCount(count+1);
    }

    return(
        <button onClick={handleCLick}>Count is {count}</button>
    )
}

export default Counter