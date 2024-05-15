import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Pricing6 from '../components/pricing6'
import Footer15 from '../components/footer15'
import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Frugal Meek Goshawk</title>
        <meta property="og:title" content="Page - Frugal Meek Goshawk" />
      </Helmet>
      <div className="page-navbar1">
        <Navbar4></Navbar4>
      </div>
      <div className="page-pricing2">
        <Pricing6></Pricing6>
      </div>
      <div className="page-logos3"></div>
      <div className="page-features4"></div>
      <div className="page-footer11">
        <Footer15></Footer15>
      </div>
    </div>
  )
}

export default Page
