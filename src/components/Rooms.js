import React from 'react';
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
const Rooms = ({room}) => {
    console.log(room);
    const {name,slug,images,price} = room;
    console.log(images)
    return <article>
        <div className="img-container">
            <img src ={images[0]} alt="single room"></img>
            <div className="price-top">
                <h6>₹{price}</h6>
                <p>per night</p>
            </div>  
        
            <Link to={`/rooms/${slug}`} className='btn-primary room-link' > Features</Link>
        </div>
        </article>;
}

Rooms.propTypes = propTypes;
Rooms.defaultProps = defaultProps;
// #endregion

export default Rooms;