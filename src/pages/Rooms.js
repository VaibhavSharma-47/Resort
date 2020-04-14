import React from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Rooms = () => {
    return <Hero hero="roomsHero">
        <Banner title="Our Rooms" >
            <Link to="/" className='btn-primary'>
                Return Home
            </Link>
        </Banner>
    </Hero>;
}

Rooms.propTypes = propTypes;
Rooms.defaultProps = defaultProps;
// #endregion

export default Rooms;   