import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
    const Navigate = useNavigate();
    return <div className='container'>
        <h1>About section</h1>
        <button className='btn btn-sm btn-primary' onClick={() => { Navigate('/') }} >Back to Home</button>
    </div>;
}

export default About;
