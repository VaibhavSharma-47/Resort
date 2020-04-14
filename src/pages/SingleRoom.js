import React from 'react';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import {RoomContext} from '../context'
import defaultBcg from '../images/room-1.jpeg'
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
class SingleRoom extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        slug:this.props.match.params.slug,
        defaultBcg
    };
}   
    static contextType = RoomContext;
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        console.log(room);
        if(!room){
            return <div className="error">
                <h3>No such room found </h3>
                <Link to='/rooms' className='btn-primary'>
                    back to rooms
                </Link>
            </div>
        }
        const {name,description,capacity,size,proce,extras,breakfast,pests,images} =room
        return <Hero hero='roomsHero'>
            <Banner title={`${name} room`}>
                <Link to='/rooms' className='btn-primary'>
                    Back to Rooms
                </Link>
            </Banner>

        </Hero>;
    }
}


export default SingleRoom;