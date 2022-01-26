import React, { useEffect, useState } from 'react';

function UseEffect_two() {
    const [screenWidth, setScreenWidth] = useState(window.screen.width);

    const widthScreen = () => {
        setScreenWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', widthScreen);

        // CleanUp Function
        return () => {
            window.removeEventListener('resize', widthScreen);
        };
    });


    return <div className='container'>
        <h5 >The Actual Screen size of my laptop is: </h5>
        <h2>{screenWidth}</h2>
    </div>;
}

export default UseEffect_two;
