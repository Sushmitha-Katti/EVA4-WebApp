import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const CLASSIFICATION = './classify.html'
const FACE_ALIGN = './face_align.html'
const FACE_RECOGNISATION = './face_recognisation.html'
const GAN = './gan.html'
const HUMAN_POSE_ESTIMATION = './hpe.html'
const FACE_SWAP = './face_swap.html'
const VAE = './vae.html'
const SRGAN = './srgan.html'
const SENTI = './sentimenatal_analysis.html'

import {
  Navbar,
  NavDropdown,
  Nav
} from "react-bootstrap";

const NavWrapper = styled.div`
margin: 1% 2%;
.navbar{
    background: linear-gradient(90deg,rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%,rgba(0,212,255,1) 100% );
   
  }

.nav-elements{
 

  a{
    font-weight:bold;
   
  }
}
.navbar-collapse{
  justify-content: center;
}
`;



const CustomNavbar = (props) => (
<NavWrapper>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" expand="lg" className ='navbar' sticky="top" >
  <Navbar.Brand href="./index.html">SVGS</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto nav-elements ">
      <Nav.Link href={CLASSIFICATION} active = {props.active == 'classify'? true: false}>Classification</Nav.Link>
      
      <NavDropdown title="Face" id="collasible-nav-dropdown" active =  {props.active == 'face'? true: false}>
        <NavDropdown.Item href={FACE_ALIGN} >Face Alignment</NavDropdown.Item>
        <NavDropdown.Item href={FACE_RECOGNISATION} >Face Recognisation</NavDropdown.Item>
        <NavDropdown.Item href={FACE_SWAP} >Face Swap</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href={HUMAN_POSE_ESTIMATION} active = {props.active == 'hpe'? true: false}>HPE</Nav.Link>
      <Nav.Link href={GAN} active = {props.active == 'gan'? true: false}>GAN</Nav.Link>
      <Nav.Link href={VAE} active = {props.active == 'vae'? true: false}>VAE</Nav.Link>
      <Nav.Link href={SRGAN} active = {props.active == 'srgan'? true: false}>SRGan</Nav.Link>
      <Nav.Link href={SENTI} active = {props.active == 'sa'? true: false}>Sentiment Analysis</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
</NavWrapper>
)

export default CustomNavbar
