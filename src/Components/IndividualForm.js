import React from 'react';
import { Link } from 'react-router-dom';
export class IndividualForm extends React.Component {
    render() {
        return (
            <div className="container form-horizontal" style={{ backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: '2px', marginTop: '5em', boxShadow: '0px 0px 10px black', textAlign: 'center' }}>
                <div className="needs-validation mb-5" style={{ padding: '2em', textAlign: 'left' }}>
                    <h1 style={{ textAlign: 'center' }}>Individual</h1>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="firstName">First name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="" required />
                            <div className="invalid-feedback">
                                Valid first name is required.
                        </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" className="form-control" id="lastName" placeholder="" required />
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
                            <div className="invalid-feedback" style={{ width: '100%' }}>
                                Your username is required.
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                        <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                        <div className="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Password <span className="text-muted"></span></label>
                        <input type="password" className="form-control" id="email" placeholder="you@example.com" />
                        <div className="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                        <div className="invalid-feedback">
                            Please enter your shipping address.
                        </div>
                    </div>
                    <hr className="mb-4" />
                    <Link to="/IndividualHome">
                        <button className="btn btn-primary btn-lg btn-block" onClick={() => {
                            // store.dispatch({ type: 'INDIVIDUAL' })
                            if (localStorage) {
                                localStorage.user = 'ind';
                            }
                        }}>SIGN UP</button>
                    </Link>
                </div>
            </div>

        )
    }
}