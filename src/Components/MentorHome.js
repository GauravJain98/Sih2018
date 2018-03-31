import React from 'react';
import { Link } from 'react-router-dom';
export class MentorHome extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [{
                name: 'Name1', id: 1, stars: 5
            }],
        }
        fetch('https://localhost:5000/startup', { method: 'GET' }).then(res => res.json()).then((da) => { this.setState({ data: da }); console.log(this.state) }).catch(() => { console.log('Error') })

    }
    componentDidMount() {
        console.log(this.state);
    }
    render() {
        return (
            <div role="main" style={{ zIndex: "999" }}>
                <div className="container-fluid mt-4" style={{ zIndex: "999", maxWidth: "80%" }} >
                    <div className="row row-offcanvas row-offcanvas-right">

                        <div className="col-12">
                            <div className="jumbotron">
                                <h3>Find some Startup's</h3>
                                <p>Weather it's growth, finances and skills development, we will find the right mentor for you</p>
                            </div>
                            <div className="row classes">
                                {
                                    [1, 2, 3, 4, 5].map((ele) => {
                                        return (
                                            <Link to={"/startupDetails/" + ele} >
                                                <div className="card col-6 col-lg-4 m-3" style={{ maxWidth: "15em" }}>
                                                    <img className="card-img-top" src="/img/portfolio/fullsize/1.jpg"
                                                        alt="Card imaap" />
                                                    <div className="card-body">
                                                        <h5 className="card-title">Your Startup</h5>
                                                        <span>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>

                                        )
                                    })}

                            </div>
                        </div>
                        <div className="col-6 col-md-2 sidebar-offcanvas" id="sidebar">
                            <div className="list-group">
                                <h3>Search</h3>
                                <div className="dropdown">
                                    <i className="fa fa-map-marker">
                                    </i>
                                    <a className="btn dropdown-toggle" type="button" style={{ maxWidth: "100%" }} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        City
                                      </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" >area 1</a>
                                        <a className="dropdown-item" >area 3</a>
                                        <a className="dropdown-item" >area 4</a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <i className="fa fa-graduation-cap">
                                    </i>
                                    <a className="btn dropdown-toggle" type="button" style={{ maxWidth: "100%" }} id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Experties
                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <a className="dropdown-item" >web development</a>
                                        <a className="dropdown-item" >android </a>
                                        <a className="dropdown-item" >ml</a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <i className="fa fa-star">
                                    </i>
                                    <a className="btn dropdown-toggle" type="button" style={{ maxWidth: "100%" }} id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Rating
                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                                        <a className="dropdown-item" >1 and above</a>
                                        <a className="dropdown-item" >2 and above</a>
                                        <a className="dropdown-item" >3 and above</a>
                                        <a className="dropdown-item" >4 and above</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

