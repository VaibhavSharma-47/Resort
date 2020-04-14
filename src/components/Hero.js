import React from 'react';
// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {hero:'defaultHero'};

/**
 * 
 */
const Hero = ({children,hero}) => {
    return (
    <header className={hero}>
        {children}
    </header>);
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;
// #endregion

export default Hero;