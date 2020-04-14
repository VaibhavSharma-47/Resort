import React from 'react';
import {RoomContext} from '../context'
import Loading from './Loading'
import Rooms from './Rooms'
import Title from './Title'
import { Link } from 'react-router-dom';
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
class FeaturedRooms extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
    }
    static contextType =RoomContext;

    render() {
        let {featuredRooms:rooms,loading} = this.context;
        rooms = rooms.map(room=>{
            return <Rooms key={room.id} room={room}/>
        })
       // console.log(loading); 
        
    return (<section className="featured-rooms">
                <Title title='featured rooms'>
                    
                </Title>
                <div className="featured-rooms-center">
        
                    {loading?<Loading/>:rooms}
                </div>
            </section>);
    }
}

FeaturedRooms.propTypes = propTypes;
FeaturedRooms.defaultProps = defaultProps;
// #endregion

export default FeaturedRooms;   