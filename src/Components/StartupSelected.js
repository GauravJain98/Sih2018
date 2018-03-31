import React from 'react';
export class StartupSelected extends React.Component {
    render() {
        return (
            <div>
                <div role="main" style={{ zIndex: "999" }}>
                    <div className="container" style={{ opacity: "0.8" }}>
                        <div className="row ml-4">
                            {[1, 2, 3, 4, 1, 2, 3, 5].map(() => {
                                return (
                                    <div className="card text-dark bg-light mb-4 m-4 text-lg-center" style={{ maxWidth: "18rem" }}>
                                        <div className="card-header">Mr Aki</div>
                                        <div className="card-body">
                                            <h5 className="card-title">Course Name</h5>
                                            <img className="card-img-top" style={{ marginBottom: "2%" }} src="img/portfolio/thumbnails/1.jpg" alt="Cardimagecap" />
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a className="btn btn-light" style={{ borderColor: "#4e555b" }}>Start Course</a>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>


            </div>
        );
    }
}