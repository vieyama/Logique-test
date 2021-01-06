import React from 'react'
import { Container } from 'reactstrap'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'

const Layout = ({ children }) => {
    
    return (
        <div>
            <Header />
            <Nav />
            <Container>{children}</Container>
            <Footer />
        </div>
    )
}

export default Layout
