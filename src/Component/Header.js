import React from "react";
import { Link } from "react-router-dom";
function Header()
{
    return(
        <div className="App header">
            <img
            alt='logo'
            className='logo'
             src='https://img.lovepik.com/element/40050/5196.png_1200.png' />

                    <ul className="nav-ul">
                    <li><Link to="/">Home</Link></li>
                        <li><Link to="/add">New Employee Detail</Link></li>
                        
                        <li><Link to="/about"> About</Link></li>                        
                    </ul>
                    
        </div>
    )
}
export default Header;