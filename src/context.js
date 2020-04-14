import React from 'react';
import items from './data';
// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const RoomContext = React.createContext();

/**
 * 
 */
class RoomProvider extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true
    };
}
    componentDidMount(){
        let rooms =  this.formatdata(items)
        let featuredRooms = rooms.filter(room=>room.featured===true);
        this.setState({
            rooms,featuredRooms,sortedRooms:rooms,loading:false
        })
        //console.log(rooms)
    }
    formatdata(items){
        let tempItems = items.map((item)=>{
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = {...item.fields,images,id};
            return room;
        })
        return tempItems;
    }
    getRoom = (slug)=>{
        const tempRoom = [...this.state.rooms]
        const room = tempRoom.find(room => room.slug===slug)
        return room
    }

    render() {
        return (
        <RoomContext.Provider value={{...this.state,getRoom : this.getRoom}}>
            {this.props.children}
        </RoomContext.Provider>);
    } 
}

const RoomConsumer = RoomContext.Consumer;
// #endregion

export {RoomProvider,RoomConsumer,RoomContext};