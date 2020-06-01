import React from 'react';
import Hero from '../compoments/Hero';
import Banner from '../compoments/Banner';
import { Link } from 'react-router-dom';
import Sevices from '../compoments/Services';
import FeaturedRooms from '../compoments/FeaturedRooms';

const Homes = () => {
    return (
        <>
            <Hero>
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">our rooms</Link>
                </Banner>
            </Hero>
            <Sevices />
            <FeaturedRooms />
        </>
    );
}

export default Homes;
