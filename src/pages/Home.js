import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Servies from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'

const Rooms = () =>{
    return(
        <> 
        <Hero hero="defaultHero">
            <Banner title="Luxurious Room" subtitle="Delux room @ ₹100">
                <Link to='/rooms' className='btn-primary'>
                    Our rooms
                </Link>
            </Banner>
        </Hero>

        <Servies></Servies>
        <FeaturedRooms></FeaturedRooms>
        </>

    )
}
export default Rooms