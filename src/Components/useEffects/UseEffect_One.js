import React, { useEffect, useState } from 'react';

function UseEffect_One() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count !== 0) {
            document.title = `Chats (${count})`;
        }
        else {
            document.title = `Chats`;
        }
    }, [count]);


    return <div>
        <h2>This is for useEffect Precticals </h2>
        <h1 className='myStyle'>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>;
}

export default UseEffect_One;



