import { Badge, Tooltip } from '@mui/material'
import React from 'react'

import {NavLink , Link} from "react-router-dom"
export default function Navbar({totalItems}) {
    return (
        <div className="container-fluid">
    
        {/* Nav - Bar  */}

        <nav className="row navbar navbar-expand-lg navbar-light" style={{backgroundColor:"brown"}}>
          <Link to="/"><Tooltip title="مطعم ليالي بغداد - Restaurant Baghdad Nights"><img src="images\Logo.png" width="150" alt="logo" /></Tooltip></Link>
          <button className="navbar-toggler custom-toggler bg-warning" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav text-center  ml-auto" >
              <li className="nav-item active ">
                <NavLink exact activeClassName="bgcolornavbtns" className="nav-link fontNavbarLinks" to="/">🏠 Home <span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item active">
                <NavLink exact activeClassName="bgcolornavbtns" className="nav-link fontNavbarLinks" to="/menu">🍴 Menu</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink exact activeClassName="bgcolornavbtns" className="nav-link fontNavbarLinks" to="/contact">📞 Contact</NavLink>
              </li>
              

              
              <li className="nav-item active">
                
                <NavLink exact activeClassName="bgcolornavbtns" className="nav-link fontNavbarLinks" to="/cart"><Badge badgeContent={totalItems} color="info">🛒 Cart </Badge></NavLink>
                
              </li>
               
              
            </ul>
          </div>
        </nav>

      </div>
    )
}
