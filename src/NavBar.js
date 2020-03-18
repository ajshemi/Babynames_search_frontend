import React from 'react';
import {NavLink} from 'react-router-dom';
import babynamerlogo from './babynamerlogo.png'
import bottle3 from './bottle3.png'

import {Divider, Image, Menu, MenuItem, Segment} from 'semantic-ui-react'
// import Welcome from './Welcome'


const NavBar = (props) => {

//  const renderWelcome = 
//     props.user ? <Welcome user={props.user}/> : null
  

  return(
    <>
      <center>
        {/* <Menu clearing borderless secondary className="nav" >
          <Menu.Menu position='right'>
            <Image src={babynamerlogo} alt='babynamerlogo' size='large' /> 
          </Menu.Menu>
          <Menu.Menu floated='right'>
            <MenuItem>
              <NavLink to="/">Home</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/login">Login</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/register">Register</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/Favorites">Favorites</NavLink>
            </MenuItem>
          </Menu.Menu>
        </Menu> */}

        {/* <Segment.Group horizontal borderless> */}
          {/* <Segment></Segment> */}
          <Segment basic compact clearing>
            {/* <Image src={babynamerlogo} alt='babynamerlogo' size='medium' />  */}
            {/* <Divider hidden/> */}
            <Image src={bottle3} alt='bottle' size='tiny' />
            {/* </Segment> */}
          {/* <Segment clearing> */}
          <Menu borderless secondary floated='right'>
            <MenuItem>
              <NavLink to="/">Home</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/login">Login</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/register">Register</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/Favorites">Favorites</NavLink>
            </MenuItem>
          </Menu>
          </Segment>
        {/* </Segment.Group> */}

        {/* <Divider hidden/> */}
      </center>
    </>
  )
};

export default NavBar;