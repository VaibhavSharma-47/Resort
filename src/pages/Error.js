import React from 'react';
import Hero from '../components/Hero'

import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component

/**
 * 
 */
const Error = () => {
    return <Hero>
        <Banner title="404" subtitle="page not found">
            <Link to="/" className='btn-primary'>
                Return Home
            </Link>
        </Banner>
    </Hero>;
}

// #endregion

export default Error;