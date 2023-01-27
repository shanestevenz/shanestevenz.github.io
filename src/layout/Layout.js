import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Sidebar from '../components/SideBar/SideBar'
import { Container, Container2, SMain } from './LayoutStyles'

{/** This acts as the layout for the home page. The page will have a 
 - header
 - {children} (this will get passed in)
 - footer
*/}
export const Layout = ({ children }) => {
  return (
    <Container>
       {/*<Header /> */}
          <Container2>
              <Sidebar />
              <SMain>{children}</SMain>
          </Container2>
          
        <Footer />
    </Container>
  )
}
