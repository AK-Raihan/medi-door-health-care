import React from 'react';
import Banner from '../Banner/Banner';
import FindDoctor from '../FindDoctor/FindDoctor';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <FindDoctor></FindDoctor>
        </div>
    );
};

export default Home;