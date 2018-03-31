import React from 'react';
import { Link } from 'react-router-dom';
export class IndividualForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            address: '',
            user: {}
        }
    }
    render() {
        return (
            <div className="container form-horizontal" style={{ backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: '2px', marginTop: '5em', boxShadow: '0px 0px 10px black', textAlign: 'center' }}>
                <div className="needs-validation mb-5" style={{ padding: '2em', textAlign: 'left' }}>
                    <h1 style={{ textAlign: 'center' }}>Individual</h1>
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <label htmlFor="firstName">Name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="" required onKeyUp={(e) => { this.setState({ name: e.target.value }) }} />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                        <input type="email" className="form-control" id="email" placeholder="you@example.com" onKeyUp={(e) => { this.setState({ email: e.target.value }) }} /></div>
                    <div className="mb-3">
                        <label htmlFor="password">Address</label>
                        <input type="text" className="form-control" id="password" required onKeyUp={(e) => { this.setState({ password: e.target.value }) }} />
                    </div>
                    <hr className="mb-4" />
                    <Link to="/indihome">
                        <button className="btn btn-primary btn-lg btn-block" onClick={() => {
                            // store.dispatch({ type: 'ADDINDIVIDUAL', payload: { ...this.state } });
                        }}>SIGN UP</button>
                    </Link>
                </div>
            </div >

        )
    }
}
