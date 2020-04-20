import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = (props) => {
    let nav = props.user ?
    <div>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='' className='badge badge-primary' onClick={props.handleLogout}>LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/profile' className='badge badge-primary'>PROFILE</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/' className='badge badge-primary'>HOME</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='badge badge-primary'>WELCOME, {props.user.name}</span>
    </div>
    :
    <div>
      <Link to='/login' className='badge badge-primary'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='badge badge-primary'>SIGN UP</Link>
    </div>;
   
    

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;