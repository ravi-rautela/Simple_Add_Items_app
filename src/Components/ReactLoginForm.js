import React, { useState } from 'react';
import styled from "styled-components";


function ReactLoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [AllData, setAllData] = useState([]);

    const submitData = (e) => {
        e.preventDefault();
        if (email && password) {

            const newEntry = { id: new Date().getTime().toString(), email: email, password: password };
            setAllData([...AllData, newEntry]);

            setEmail("");
            setPassword("");
        }
        else {
            alert("Somthing went wrong!");
        }


    }
    return (
        <>

            <Container>
                <form action="" onSubmit={submitData}>
                    <label>Email</label>
                    <input type="text" id="email" placeholder='Enter E-mail id' autoComplete='off'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                    <label>Password</label>
                    <input type="password" id="password" placeholder='Password' autoComplete='off'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type='submit' >LogIn</button>
                </form>
            </Container>

            <>
                {
                    AllData.map((currEle) => {
                        return (
                            <div className='result' key={currEle.id} >
                                <p>Email: {currEle.email}</p>
                                <p>Password: {currEle.password}</p>
                            </div>
                        )
                    })
                }
            </>


        </>
    )
}

export default ReactLoginForm
const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    min-width:400px;
    padding: 30px;
    border-radius: 10px;
    margin-top: 50%;

    form{
        display: flex;
    flex-direction: column;
    }

    label{
        text-align:center;
        font-weight: normal;
    }
    input{
        padding:10px;
        border-radius: 30px;
        border:1px solid black;
        font-size: 15px;
    }
`