import React from 'react';
import { Link } from 'react-router-dom';
export class Main extends React.Component {
    render() {
        return (
            <div>
                <header className="masthead text-center text-white d-flex">
                    <div className="container my-auto">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <h1 className="text-uppercase">
                                    <strong>We connect students and startups with mentors all over India.</strong>
                                </h1>
                                <hr />
                            </div>
                            <div style={{ textAlign: 'center', width: '100%' }}>
                                <h5>
                                    We believe in the philosophy that everything begins with an idea.
                                <br />
                                    We think that great ideas need landings gears to take off as well wings to fly.
                                <br />
                                    Whether it's incubation, courses, mentors you are looking for, we are here to help you.
                                </h5>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="bg-primary" id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto text-center">
                                <h2 className="section-heading text-white">We've got what you need!</h2>
                                <hr className="light my-4" />
                                <p className="text-faded mb-4">Our goal is to connect startups with people to guide and provide them with everything they require to grow and expand.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading">At Your Service</h2>
                                <hr className="my-4" />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 text-center">
                                <Link to="/indihome">
                                    <div className="service-box mt-5 mx-auto">
                                        <i className="fa fa-4x fa-user  text-primary mb-3 sr-icons"></i>
                                        <h3 className="mb-3">Study Courses</h3>
                                        <p className="text-muted mb-0">Our templates are updated regularly so they don't break.</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <Link to="/startuphome">
                                    <div className="service-box mt-5 mx-auto">
                                        <i className="fa fa-4x fa-users text-primary mb-3 sr-icons"></i>
                                        <h3 className="mb-3">Work on Your StartUp</h3>
                                        <p className="text-muted mb-0">You can use this theme as is, or you can make changes!</p>
                                    </div>
                                </Link>

                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <Link to="/mentorhome">
                                    <div className="service-box mt-5 mx-auto">
                                        <i className="fa fa-4x fa-graduation-cap text-primary mb-3 sr-icons"></i>
                                        <h3 className="mb-3">Find Mentors</h3>
                                        <p className="text-muted mb-0">We update dependencies to keep things fresh.</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <Link to="/incubhome">
                                    <div className="service-box mt-5 mx-auto">
                                        <i className="fa fa-4x fa-building text-primary mb-3 sr-icons"></i>
                                        <h3 className="mb-3">Find Incubation</h3>
                                        <p className="text-muted mb-0">You have to make your websites with love these days!</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto text-center">
                                <h2 className="section-heading">Let's Get In Touch!</h2>
                                <hr className="my-4" />
                                <p className="mb-5">Ready to start your next project with us? That's great! Give us a call or send us an email and we will get back to you as soon as possible!</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 ml-auto text-center">
                                <i className="fa fa-phone fa-3x mb-3 sr-contact"></i>
                                <p>123-456-6789</p>
                            </div>
                            <div className="col-lg-4 mr-auto text-center">
                                <i className="fa fa-envelope-o fa-3x mb-3 sr-contact"></i>
                                <p>
                                    <a href="mailto:your-email@your-domain.com">feedback@startbootstrap.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}