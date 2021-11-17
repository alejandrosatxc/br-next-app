import React from 'react';
import Image from 'next/image'
import styled from 'styled-components';

const Navbar =styled.nav`
    background-color: #333;
    overflow: hidden;

    a {
        float: left;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    }

   
`



const NavBar = () => {
    return(
        // <Navbar sticky="top" id="menu1" className="lawnavbg" bg="light" expand="lg">
            //{/* <Navbar.Brand href="#home">
                // <img 
                // src={'/brlogo_sm.png'}
                // width="140"
                // className="logo" 
                // alt="logo"  />
           // </Navbar.Brand> */}
            //{/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
           // {/* <Navbar.Collapse id="basic-navbar-nav"> */}
           <Navbar>
                <a href="http://www.bellripper.com/"><Image src="/brlogo_sm.png"  width={200/3} height={79/3}/></a>
            
                <a  href="http://www.bellripper.com/">Home</a>
                <a href="http://www.bellripper.com/new-clients.html">New Clients</a>
                <a  href="http://www.bellripper.com/contact-us.html">Contact Us</a>
                    {/* TODO Create Signout/user portal button */}
                    {/* {auth.isAuthenticated ? <Nav.Link onClick={handleLogout} href='#'>Logout</Nav.Link> : null} */}
                
            </Navbar>
        //     </Navbar.Collapse>
        // </Navbar>
    )
}

export default NavBar