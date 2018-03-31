import React from 'react';
import { Link } from 'react-router-dom';
import { MenObj } from '../store/startup';
export class StartupHome extends React.Component {
    constructor(props) {
        super(props);
        this.mentor = new MenObj();
    }
    render() {
        return (
            <div>
                <div role="main" style={{ zIndex: "999" }}>
                    <div className="container" style={{ opacity: "0.8" }}>
                        <div className="row ml-4">
                            {this.mentor.getMentor().map((ele, index) => {
                                return (
                                    <Link to={'/MentorAbout/' + ele.name}  >
                                        <div key={'startupname' + index} className="card text-dark bg-light mb-4 m-4 text-lg-center" style={{ maxWidth: "18rem" }}>
                                            <div className="card-header">{ele.name}</div>
                                            <div className="card-body">
                                                <img className="card-img-top" style={{ marginBottom: "2%" }} src="img/portfolio/thumbnails/1.jpg" alt="Cardimagecap" />
                                                {ele.skills.map((ele, index) => {
                                                    return (
                                                        <span style={{ boxShadow: "0px 0px 10px black", padding: '2px', margin: '5px' }}> {ele}</span>
                                                    )
                                                })}
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a className="btn btn-light" style={{ borderColor: "#4e555b" }}><strong>CONNECT</strong></a>
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

