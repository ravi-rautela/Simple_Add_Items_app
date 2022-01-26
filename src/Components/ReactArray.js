import React, { useState } from 'react'

function ReactArray() {

    const bioData = [
        {
            id: 0, myName: "Ravi Rautela", Age: 21
        },
        {
            id: 1, myName: "Subham", Age: 33
        }
    ]
    const [myArray, setmyArray] = useState(bioData);

    const clearText = () => {
        setmyArray([]);
    }
    return (
        <>
            {
                myArray.map((curElm) => {
                    return <h2 className='myStyle' key={curElm.id}>Name: {curElm.myName} & Age: {curElm.Age}</h2>

                })
            }
            <button onClick={clearText}>Clear</button>
        </>
    )
}

export default ReactArray
