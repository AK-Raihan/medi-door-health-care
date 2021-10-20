import React from 'react';
import { useParams } from 'react-router';

const Depertment = () => {
    const{serviceId} = useParams()
    return (
        <div>
            <h1>this is depertment{serviceId}</h1>
        </div>
    );
};

export default Depertment;