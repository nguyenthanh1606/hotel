import React from 'react';
import Hero from '../compoments/Hero';
import Banner from '../compoments/Banner';
import { Link } from 'react-router-dom';
import RoomsContainer from '../compoments/RoomsContainer';

const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="Our Room">
                    <Link to="/" className="btn-primary">return home</Link>
                </Banner>
            </Hero>
            <RoomsContainer/>
        </>
    );
}

export default Rooms;
