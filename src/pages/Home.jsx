import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import World from '../components/World'
import Comments from '../components/Comments'
import Social from '../components/Social'
import Fun from '../components/Fun'
// import MessageDialog from '../components/MessageDialog'
import Modal from '../components/Modal'

const Home = ({message}) => {
  
  return (
    <div>
        <Navbar />
        <Hero />
        <Banner />
        <World />
        <Comments message={message} />
        <Social />
        {/* <Fun test={test}/> */}
        {/* <MessageDialog /> */}
        {/* <Modal /> */}
    </div>
  )
}

export default Home