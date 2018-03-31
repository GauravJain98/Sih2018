import React from 'react';
export class StartupAbout extends React.Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="container-fluid mt-4" style={{ zIndex: "999", maxWidth: "80%" }}>
                <div className="row row-offcanvas row-offcanvas-right">

                    <div className="col-12 col-md-9">
                        <p className="float-right d-md-none">
                            <button type="button" className="btn btn-primary btn-sm" data-toggle="offcanvas">Toggle nav</button>
                        </p>
                        <div className="jumbotron">
                            <h3>Read and learn from theses articles written by our best mentors</h3>
                            <p>Weather it's growth, finances and skills development, we will find the right mentor for you</p>
                        </div>

                        <div className="row">
                            <div className="card col-12 m-3">
                                <div className="card-body">
                                    <h3 className="card-title">Important technoligies to of this year</h3>
                                    <span>
                                        <button type="button" className="btn disabled btn-outline-secondary">Web Develpment</button>
                                        <button type="button" className="btn disabled btn-outline-secondary">Android</button>
                                        <button type="button" className="btn disabled btn-outline-secondary">ML</button>
                                    </span>
                                    <hr />
                                    <h5>
                                        blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain
                                        blockchain blockchain blockchain
                        </h5>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-6 col-md-3 sidebar-offcanvas" id="sidebar">
                        <div className="list-group">
                            <h3>Filter</h3>
                            <div className="dropdown">
                                <i className="fa fa-newspaper-o">
                                </i>
                                <a className="btn dropdown-toggle" type="button" style={{ maxWidth: "100%" }} id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Topic
                    </a>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item"  >topic 1</a>
                                    <a className="dropdown-item"  >topic 2</a>
                                    <a className="dropdown-item"  >topic 3</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}