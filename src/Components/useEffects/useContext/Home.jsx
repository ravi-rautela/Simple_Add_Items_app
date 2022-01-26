import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/Login');
    }

    return <div className='container'>
        <h1>Home Section</h1>
        <button className='btn btn-sm btn-primary' onClick={handleBack} >LOGIN HERE</button>
    </div>;
}

export default Home;

