import React from 'react';
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

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
class Services extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info:"lorem Pariatur est sint deserunt nulla ipsum mollit consequat aliquip tempor. Aliqua adipisicing laborum culpa cillum cupidatat veniam minim sit sint. Enim eu ipsum Lorem nostrud velit ipsum ullamco occaecat. Et fugiat voluptate labore officia irure elit. Cupidatat cillum deserunt deserunt irure quis. Mollit pariatur ad voluptate minim nulla ipsum proident labore velit minim Lorem."
            },
            {
                icon:<FaHiking/>,
                title:"Hiking   ",
                info:"lorem Pariatur est sint deserunt nulla ipsum mollit consequat aliquip tempor. Aliqua adipisicing laborum culpa cillum cupidatat veniam minim sit sint. Enim eu ipsum Lorem nostrud velit ipsum ullamco occaecat. Et fugiat voluptate labore officia irure elit. Cupidatat cillum deserunt deserunt irure quis. Mollit pariatur ad voluptate minim nulla ipsum proident labore velit minim Lorem."
            },
            {
                icon:<FaShuttleVan/>,
                title:"A Shuttle van",
                info:"lorem Pariatur est sint deserunt nulla ipsum mollit consequat aliquip tempor. Aliqua adipisicing laborum culpa cillum cupidatat veniam minim sit sint. Enim eu ipsum Lorem nostrud velit ipsum ullamco occaecat. Et fugiat voluptate labore officia irure elit. Cupidatat cillum deserunt deserunt irure quis. Mollit pariatur ad voluptate minim nulla ipsum proident labore velit minim Lorem."
            },
            {
                icon:<FaBeer/>,
                title:"Free Beer",
                info:"lorem Pariatur est sint deserunt nulla ipsum mollit consequat aliquip tempor. Aliqua adipisicing laborum culpa cillum cupidatat veniam minim sit sint. Enim eu ipsum Lorem nostrud velit ipsum ullamco occaecat. Et fugiat voluptate labore officia irure elit. Cupidatat cillum deserunt deserunt irure quis. Mollit pariatur ad voluptate minim nulla ipsum proident labore velit minim Lorem."
            },
        ]
    };
}

    render() {
        return <section className='services'> 
            <Title title='services'> 
                
            </Title>
            <div className='services-center'>
            {this.state.services.map((item,index)=>{
                return(
                    <article className='service' key={index}>
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                    </article>
                    
                    )
            })}

            </div>
    </section>;
    }
}

Services.propTypes = propTypes;
Services.defaultProps = defaultProps;
// #endregion

export default Services;