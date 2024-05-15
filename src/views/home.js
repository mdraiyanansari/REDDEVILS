import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Hero3 from '../components/hero3'
import Logos1 from '../components/logos1'
import Gallery1 from '../components/gallery1'
import CTA1 from '../components/cta1'
import FAQ1 from '../components/faq1'
import Contact4 from '../components/contact4'
import Footer15 from '../components/footer15'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Frugal Meek Goshawk</title>
        <meta property="og:title" content="Frugal Meek Goshawk" />
      </Helmet>
      <div className="home-navbar1">
        <Navbar4></Navbar4>
      </div>
      <div className="home-hero2">
        <Hero3 image1Src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGNyaXN0aWFub3xlbnwwfHx8fDE3MTU3NjE4NjJ8MA&amp;ixlib=rb-4.0.3&amp;w=1500"></Hero3>
      </div>
      <div className="home-logos3">
        <Logos1 text="Our Partners"></Logos1>
      </div>
      <div className="home-gallery4">
        <Gallery1></Gallery1>
      </div>
      <div className="home-features5"></div>
      <div className="home-features6"></div>
      <div className="home-features7"></div>
      <div className="home-cta8">
        <CTA1></CTA1>
      </div>
      <div className="home-faq9">
        <FAQ1></FAQ1>
      </div>
      <div className="home-contact10">
        <Contact4
          address1="creeper pur"
          content5="65/66 Pahadi Elaka"
        ></Contact4>
      </div>
      <div className="home-footer11">
        <Footer15
          logoSrc="/New Folder/red%20and%20black%20e-sports%20illustrative%20pirates%20gaming%20animated%20logo-1500h.jpg"
          content2="Designed and Developed By RAIYAN"
          copyright="@2024 All rights under BJP"
        ></Footer15>
      </div>
    </div>
  )
}

export default Home
