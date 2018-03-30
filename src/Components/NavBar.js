import React from 'react';
import { Link } from 'react-router-dom';
export class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" style={{ color: 'orange!important', position: 'static', width: '100%', left: '0px', top: '0px' }}>
                <div className="container">
                    <Link to="/" style={{ color: 'orange' }} className="navbar-brand js-scroll-trigger">
                        CONNECTSHARE
                </Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link style={{ color: 'orange' }} className="nav-link" to="/login" >Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{ color: 'orange' }} className="nav-link" to="/signupselect">SignUp</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        )
    }
}