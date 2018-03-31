import React from 'react';
import { Link } from 'react-router-dom';
import store from '../store/store';

export class StartupForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            address: '',
        }
    }
    render() {
        return (
            <div className="container" style={{ backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: '2px', marginTop: '5em', boxShadow: '0px 0px 10px black', textAlign: 'center' }}>
                <div className="needs-validation" style={{ padding: '2em', textAlign: 'left' }}>
                    <h1 style={{ textAlign: 'center' }}>StartUp</h1>
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <label htmlFor="firstName">Name</label>
                            <input type="text" className="form-control" id="firstName" onKeyUp={(e) => { this.setState({ name: e.target.value }) }} />

                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="username">Username</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">@</span>
                            </div>
                            <input type="text" className="form-control" id="username" placeholder="Username" required onKeyUp={(e) => { this.setState({ username: e.target.value }) }} />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="you@example.com" required onKeyUp={(e) => { this.setState({ email: e.target.value }) }} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password">Password </label>
                        <input type="password" className="form-control" id="password" placeholder="enter your password here" required onKeyUp={(e) => { this.setState({ password: e.target.value }) }} />                    </div>

                    <div className="mb-3">
                        <label htmlFor="ph_no">Phone Number</label>
                        <input type="tel" className="form-control" id="ph_no" placeholder="Enter your ph. number here" required onKeyUp={(e) => { this.setState({ phoneno: e.target.value }) }} />

                    </div>

                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="state">State</label>
                            <select className="custom-select d-block w-100" id="state" required onClick={(e) => { this.setState({ email: e.target.value }) }} >
                                <option value="">Choose...</option>
                                <option>J&amp;K</option>
                            </select>

                        </div>


                        <div className="col-md-3 mb-3">
                            <label htmlFor="zip">Zip</label>
                            <input type="text" className="form-control" id="zip" placeholder="" required />
                            <div className="invalid-feedback">
                                Zip code required.
                    </div>
                        </div>
                    </div>

                    <hr className="mb-4" />
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="same-address" />
                        <label className="custom-control-label" htmlFor="same-address">Agree to <a href="/" target="_blank">terms and conditions</a></label>
                    </div>
                    <hr className="mb-4" />
                    <Link to="/StartupHome">
                        <button className="btn btn-primary btn-lg btn-block" onClick={() => {
                            store.dispatch({ type: 'ADDSTARTUP', payload: { ...this.state } });

                        }}>SUBMIT</button>
                    </Link>
                </div>
            </div >

        )
    }
}