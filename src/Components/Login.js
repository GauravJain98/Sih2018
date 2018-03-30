import React from 'react';
export class Login extends React.Component {
    render() {
        return (
            <div>
                <div className="container form-horizontal " style={{ backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: '2px', marginTop: '15%', boxShadow: '0px 0px 10px black', textAlign: 'center', maxWidth: '30%' }}>
                    <div className="form-signin pt-5 pb-5" style={{ zIndex: 999, opacity: 0.9 }}>
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input onKeyUp={(e) => { this.setState({ email: e.target.value }) }} type="email" id="inputEmail" style={{ margin: '1em 0em' }} className="form-control" placeholder="Email address" required />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input onKeyUp={(e) => { this.setState({ password: e.target.value }) }} type="password" id="inputPassword" style={{ margin: '1em 0em' }} className="form-control" placeholder="Password" required />
                        <button onClick={() => {
                            this.checkUser();
                        }} className="btn btn-lg btn-primary btn-block" >
                            Sign in</button>
                    </div>
                </div>
            </div>

        )
    }
}