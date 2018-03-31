import React, { Component } from 'react';
import './require.css';

export class AboutMentor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            obj: {},
            value: ''
        }
        fetch('http://localhost:5000/mentor/1', { method: 'GET' }).then(res => res.json())
        .then((da) => { this.setState({ obj: da }); 
        console.log(this.state) }).catch(() => { console.log('Error') })

    }
    showReview() {
        if (this.state.obj.reviews !== null) {
            return this.state.obj.reviews.map((ele, index) => {
                return (
                    <div className="row">
                        <div className="col-2" key={'review' + index}>
                            <img className="card-img-top"
                                src="./img/pict&#45;&#45;customer-female-ivr-people-vector-stencils-library.png"
                                alt="Card imp" style={{ maxWidth: "50%" }} />
                            <small className="card-title text-success" style={{ color: "#51d8af" }} > (poster)</small>
                        </div>
                        <div className="col-10">
                            <p className="card-text">{ele.review}
                            </p>
                        </div>
                    </div>
                )
            })
        } else {
            return (<span></span >)
        }

    }
    render() {
        return (
            <div className="container-fluid mt-4" style={{ zIndex: '999', maxWidth: '80%' }}>
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="card" style={{ width: "18rem", border: "hidden" }}>
                                    <img className="card-img-top"
                                        src="/img/pict&#45;&#45;customer-female-ivr-people-vector-stencils-library.png"
                                        alt="Card imageap" />
                                    <div className="card-body">
                                        <h5 className="card-title">5 years of experience</h5>
                                        <span>
                                            <i className="fa fa-star"> </i>
                                            <i className="fa fa-star"> </i>
                                            <i className="fa fa-star"> </i>
                                            <i className="fa fa-star"> </i>
                                            <i className="fa fa-star-half"> </i>
                                        </span>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><button className="btn btn-primary" > Request a
                      message</button></li>
                                        <li className="list-group-item"><a className="btn" >
                                            <span>
                                                <i className="fa fa-heart-o"></i>
                                                Save to favorites</span>
                                        </a></li>
                                        <li className="list-group-item"><a className="btn"  >
                                            <small>
                                                Saved 200 times
                                </small>
                                        </a></li>
                                    </ul>
                                    <div className="card-body">
                                        <a className="card-link">15 views</a>

                                        <a className="card-link">5 reviws</a>
                                    </div>
                                </div>
                            </div>


                            <div className=" col-md-9 col-lg-9 ">
                                <div className="card" style={{ maxWidth: "100%", border: "hidden" }} >
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-6">
                                                <h2 className="card-title">{this.state.obj.name}</h2>
                                                <h3 className="card-subtitle mb-4 mt-3 text-muted">{this.state.obj.occupation}</h3>

                                                <h6 className="card-subtitle mb-4 text-muted">
                                                    <i className="fa fa-map-marker"></i>
                                                    {this.state.obj.location}</h6>

                                                <strong className="card-subtitle mb-4 text-muted">Experties</strong>
                                                <br />
                                            </div>
                                            <div className="col-6 text-right">
                                                <a href="https://www.linkedin.com">
                                                    <button type="button" className="btn" href="https://www.linkedin.com"
                                                        style={{ fontSize: "1em", backgroundColor: "#51d8af" }} > <i
                                                            className="fa fa-linkedin "></i></button>
                                                </a>

                                                <a href="https://www.linkedin.com">
                                                    <button type="button" className="btn" href="https://www.linkedin.com"
                                                        style={{ fontSize: " 1em", backgroundColor: "#51d8af" }} > <i
                                                            className="fa fa-twitter "></i></button>
                                                </a>

                                                <a href="https://www.linkedin.com">
                                                    <button type="button" className="btn" href="https://www.linkedin.com"
                                                        style={{ fontSize: "1em", backgroundColor: "#51d8af" }} > <i
                                                            className="fa fa-github"></i></button>
                                                </a>

                                                <a href="https://www.linkedin.com">
                                                    <button type="button" className="btn" href="https://www.linkedin.com"
                                                        style={{ fontSize: "1em", backgroundColor: "#51d8af" }} > <i
                                                            className="fa fa-google-plus "></i></button>
                                                </a>
                                                <a href="https://www.linkedin.com">
                                                    <button type="button" className="btn" href="https://www.linkedin.com"
                                                        style={{
                                                            fontSize: "1em", backgroundColor: "#51d8af"
                                                        }} > <i
                                                            className="fa fa-facebook "></i></button>
                                                </a>

                                            </div>

                                        </div>

                                        <div className="mt-3">
                                            {/* {this.state.obj.expertise.map((ele, index) => {
                                                return (
                                                    <button type="button" key={'exp' + index} style={{ margin: '1px' }} className="btn disabled btn-outline-secondary">Web Develpment</button>

                                                )
                                            })} */}
                                            {/* <button type="button" className="btn disabled btn-outline-secondary">Web Develpment</button>
                                            <button type="button" className="btn disabled btn-outline-secondary">Androind</button>
                                            <button type="button" className="btn disabled btn-outline-secondary">Django</button> */}
                                        </div>

                                        <hr />
                                        <p className="card-text">{this.state.obj.description}
                                        </p>
                                        <div className="row" style={{ maxWidth: "100%" }}>
                                            <div className="col-2 mb-1">
                                                <a className="card-link">startup 1</a>
                                            </div>
                                            <div className="col-2 mb-1">
                                                <a className="card-link">startup 2</a>
                                            </div>
                                            <div className="col-2 mb-1">
                                                <a className="card-link">startup 3</a>
                                            </div>
                                            <div className="col-2 mb-1">
                                                <a className="card-link">startup 4</a>
                                            </div>
                                            <div className="col-2 mb-1">
                                                <a className="card-link">startup 5</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">

                        <div className="input-group mb-4">
                            <input type="text" id='reviewOf' onKeyUp={(e) => {
                                this.setState({
                                    value: e.target.value
                                });
                                // console.log(this.state);
                            }} className="form-control" placeholder="Enter your review here" aria-describedby="basic-addon2" style={{ maxHeight: "25%" }} />
                            <div className="input-group-append">

                                <span style={{ background: "none" }} id="basic-addon2">
                                    <button className="btn" style={{ backgroundColor: "#51d8af" }} onClick={() => {
                                        // console.log({ ...this.state.obj, reviews: [...this.state.obj.reviews, this.state.value] });
                                        this.setState({ obj: { ...this.state.obj, reviews: [...this.state.obj.reviews, { review: this.state.value }] }, value: '' });
                                    }} >
                                        Submit
                        </button>
                                </span>
                            </div>
                        </div>

                        <div className="">
                            {this.showReview()}

                        </div>

                    </div>

                </div >
            </div >

        );
    }
}