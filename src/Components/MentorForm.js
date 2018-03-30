import React from 'react';
import { Link } from 'react-router-dom';
export class MentorForm extends React.Component {
    render() {
        return (
            <div className="container" style={{ backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: '2px', marginTop: '5em', boxShadow: '0px 0px 10px black', textAlign: 'center' }}>
                <div className="needs-validation" style={{ padding: '2em', textAlign: 'left' }}>
                    <h1 style={{ textAlign: 'center' }}>Mentor</h1>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="firstName">First name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
                            <div className="invalid-feedback">
                                Valid first name is required.
                    </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
                            <div className="invalid-feedback">
                                Valid last name is required.
                    </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="username">Username</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">@</span>
                            </div>
                            <input type="text" className="form-control" id="username" placeholder="Username" required />
                            <div className="invalid-feedback" style={{ width: "100%" }}>
                                Your username is required.
                    </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
                        <div className="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password">Password </label>
                        <input type="password" className="form-control" id="password" placeholder="enter your password here" required />
                        <div className="invalid-feedback">
                            Please enter valid password.
                </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="ph_no">Phone Number</label>
                        <input type="tel" className="form-control" id="ph_no" placeholder="Enter your ph. number here" required />
                        <div className="invalid-feedback">
                            Please enter a valid phone number
                </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="field">Field</label>
                        <select className="custom-select d-block w-100" id="field" required >
                            <option value="">Choose...</option>
                            <option>Health and care</option>
                        </select>
                        <div className="invalid-feedback">
                            Please select a valid field.
                </div>
                    </div>


                    <div className="mb-3">
                        <label htmlFor="linkedin_url">LinkedIn URL</label>
                        <input type="url" className="form-control" id="linkedin_url" placeholder="Paste your linked in url here" />
                        <div className="invalid-feedback">
                            Please enter a valid url.
                </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="state">State</label>
                            <select className="custom-select d-block w-100" id="state" required>
                                <option value="">Choose...</option>
                                <option>J&amp;K</option>
                            </select>
                            <div className="invalid-feedback">
                                Please provide a valid state.
                    </div>
                        </div>

                        <div className="col-md-5 mb-3">
                            <label htmlFor="city">City</label>
                            <select className="custom-select d-block w-100" id="city" required>
                                <option value="">Choose...</option>
                                <option></option>
                            </select>
                            <div className="invalid-feedback">
                                Please select a valid country.
                    </div>
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
                        <input type="checkbox" className="custom-control-input" id="TandC" />
                        <label className="custom-control-label" htmlFor="TandC">Agree to <a href="/" target="_blank">terms and conditions</a></label>
                    </div>
                    <hr className="mb-4" />
                    <Link to="/">
                        <button className="btn btn-primary btn-lg btn-block" onClick={() => {
                            if (localStorage) {
                                localStorage.user = 'men';
                            }
                        }}>SUBMIT</button>
                    </Link>
                </div>            </div>

        )
    }
}