import React from 'react';
import "../Css/style.css";
import "../Css/argon-dashboard.css?v=2.0.4";
import "../Css/tooplate-artxibition.css";


function Header() {
    return (
        <div>
          <div className="pre-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-6">
                    <span>Hey! The Games is Starting in 15 Days.</span>
                </div>
                <div className="col-lg-6 col-sm-6">
                    <div className="text-button">
                        <a href="rent-venue.html">Contact Us Now! <i className="fa fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                
                        <a href="/" className="logo">X<em>Sport</em></a>

                        <ul className="nav">
                            <li><a href="/" className="active">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/service">Service</a></li>
                            <li><a href="/trainer">Fitness & Training</a></li> 
                            <li><a href="/health">Health & Wellness</a></li> 
                            <li><a href="/login"> <div className="btn btn-secondry">Profile</div> </a></li>
                        </ul>        
                        <a className='menu-trigger' href="void(0)">
                            <span>Menu</span>
                        </a>
                    
                    </nav>
                </div>
            </div>
        </div>
    </header>

        </div>
         
         

            )
}

export default Header
