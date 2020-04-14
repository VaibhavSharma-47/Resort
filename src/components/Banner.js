import React from 'react'


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
const Banner = ({title,subtitle,children}) => {
    return <div className="banner">
        <h1>{title}</h1>
        <div></div>
        <p>{subtitle}</p>
        {children}
    </div>;
}

Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;
// #endregion

export default Banner;  