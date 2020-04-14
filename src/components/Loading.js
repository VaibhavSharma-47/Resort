import React from 'react';
import loadingGif from '../images/gif/loading-arrow.gif'
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
const Loading = () => {
    return <div className="Loading">
        <h4 className="loading">rooms data loading....</h4>
        <img src ={loadingGif} alt=" " ></img>
    </div>;
}

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;
// #endregion

export default Loading;