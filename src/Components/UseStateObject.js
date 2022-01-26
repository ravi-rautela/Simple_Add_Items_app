import React from 'react'

function UseStateObject() {
    const [myObject, setMyObject] = React.useState({
        myName: "Ravi Rauela", age: 21, Education: "B.Tech"
    })
    const changeObject = () => {
        setMyObject({...myObject, myName: "Vikash Singh", Education:"Diploma"})
    }
    return (
        <div>
            <h3 className='myStyle'>Name: {myObject.myName} & Age: {myObject.age}, Education: {myObject.Education} </h3>
            <button onClick={changeObject}>Update</button>
        </div>
    )
}

export default UseStateObject
