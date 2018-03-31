import React from 'react';
import { MenObj } from '../store/startup';
import { Link } from 'react-router-dom';
export class StartupHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.mentor = new MenObj();
        fetch('http://localhost:5000/mentor', { method: 'GET' }).then(res => res.json()).then((da) => { this.setState({ data: da }); console.log(this.state) }).catch(() => { console.log('Error') })
    }
    render() {
        return (
            <div className="container-fluid mt-4" style={{ zIndex: "999", maxWidth: "80%" }}>
                <div className="row row-offcanvas row-offcanvas-right">
                    <div className="col-12 col-md-9">
                        <p className="float-right d-md-none">
                            <button type="button" className="btn btn-primary btn-sm" data-toggle="offcanvas">Toggle nav</button>
                        </p>
                        <div className="jumbotron" style={{ textAlign: 'center' }}>
                            <h3><strong>Our mentors know (almost) everything</strong></h3>
                            <p>Weather it's growth, finances and skills development, we will find the right mentor for you</p>
                            <input className="input-grouped" />
                        </div>
                        <div className="row">
                            {this.state.data.map((ele) => {
                                return (
                                    <Link to="/MentorAbout/1" >
                                        <div className="card col-6 col-lg-4 m-3" style={{ maxWidth: "15em" }}>
                                            <img className="card-img-top" src="img/pict--customer-female-ivr-people-vector-stencils-library.png"
                                                alt="Cardp" />
                                            <div className="card-body">
                                                <h5 class="card-title">{ele.name}</h5>
                                                <h6>{ele.field}</h6>
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

                </div>
            </div>
        )
    }
}

