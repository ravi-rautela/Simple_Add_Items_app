import React, { useContext } from 'react';
import { BioData } from './ComA';

function ComC() {
    const myname = useContext(BioData);
    return <div className='container'>
        <h1>ComC name is : {myname}</h1>
    </div>;
}

export default ComC;

