import React from 'react'
import "../css/Navbar.css"
import {Link} from 'react-router-dom';

function Navbar() {

  const navstyle={
    textDecoration: 'none' ,
    color:'white'
  }

  return (
    <div>
        <nav id="navbar">
            <div id="layout1">
            <img id="navimg" src="https://m3d8i7u2.stackpathcdn.com/wp-content/uploads/2019/03/workthatwork_blog_type_event.jpg"></img>
            <div className='title2'>
            <div>
            <h1 className="title3">EVENT MANAGEMENT SYSTEM</h1>
            </div>
            <div>
            <Link className="title1" to='/' style={navstyle}>Home</Link>
            <Link className="title1" to='/view' style={navstyle}>View events</Link>
            <Link className="title1" to='/add' style={navstyle}>Add events</Link>
            <Link className="title1" to='/updateordelete' style={navstyle}>Update or delete events</Link>
            </div>
            </div>
            </div>


        </nav>

    </div>
  )
}

export default Navbar