import React from 'react';
import './main.css';
import { Link } from 'react-router-dom';
export class Signup extends React.Component {
    render() {
        return (
            <div>
                <div className="container form-horizontal" style={{ borderRadius: '2px', marginTop: '8em', textAlign: 'center' }}>
                    <div className="row " >
                        <div className="col-md-6 text-center" >
                            <Link to="/signupindividual">
                                <div className="service-box m-5 mx-auto" style={{ fontSize: '2em' }}>
                                    <i className="fa fa-5x fa-user text-primary mb-3 sr-icons"></i>
                                    <h3 className="mb-3" style={{ color: 'white' }}>Individuals</h3>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-6  text-center" >
                            <Link to="/signupstartup">
                                <div className="service-box m-5 mx-auto" style={{ fontSize: '2em' }}>
                                    <i className="fa fa-5x fa-users text-primary mb-3 sr-icons"></i>
                                    <h3 className="mb-3" style={{ color: 'white' }}>Startup</h3>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-6 text-center" >
                            <Link to="/signupmentor">
                                <div className="service-box m-5 mx-auto" style={{ fontSize: '2em' }}>
                                    <i className="fa fa-5x fa-graduation-cap text-primary mb-3 sr-icons"></i>
                                    <h3 className="mb-3" style={{ color: 'white' }}>Mentor</h3>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-6 text-center" >
                            <Link to="/signupiincubs">
                                <div className="service-box m-5 mx-auto" style={{ fontSize: '2em' }}>
                                    <i className="fa fa-5x fa-building text-primary mb-3 sr-icons"></i>
                                    <h3 className="mb-3" style={{ color: 'white' }}>Incubs</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}