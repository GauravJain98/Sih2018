import React from 'react';
export class AboutStartup extends React.Component {
    render() {
        return (
            <div className="container-fluid mt-4" style={{
                zIndex: '999', maxWidth: '80%'}} >
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card" style={{width: "18rem",border: "hidden"}}>
                                        <img className="card-img-top"
                                            src="/img/pict&#45;&#45;customer-female-ivr-people-vector-stencils-library.png"
                                            alt="Cage cp" />
                                        <div className="card-body">
                                            <a ><h5 className="card-title">website.com</h5></a>
                                            <span>
                                                <i className="fa fa-star"> </i>
                                                <i className="fa fa-star"> </i>
                                                <i className="fa fa-star"> </i>
                                                <i className="fa fa-star"> </i>
                                                <i className="fa fa-star-half"> </i>
                                            </span>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item"><button href="/chat.html" type="button" className="btn">Request a
                                message</button></li>
                                            <li className="list-group-item"><a    type="button" className="btn">
                                                <span>
                                                    <i className="fa fa-heart-o"></i>
                                                    Save to favorites</span>
                                            </a></li>
                                            <li className="list-group-item"><a    type="button" className="btn" >
                                                <small>
                                                    Saved 200 times
                                </small>
                                            </a></li>
                                        </ul>
                                        <div className="card-body">
                                            <a    className="card-link">15 views</a>

                                            <a    className="card-link">5 reviws</a>
                                        </div>
                                    </div>
                                </div>


                                <div className=" col-md-9 col-lg-9 ">
                                    <div className="card" style={{maxWidth: "100%", border: "hidden"}}>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-6">
                                                    <h2 className="card-title">Name</h2>


                                                    <h6 className="card-subtitle mb-4 text-muted">
                                                        <i className="fa fa-map-marker"></i>
                                                        Area</h6>
                                                </div>
                                                <div className="col-6 text-right">
                                                    <a href="https://www.linkedin.com">
                                                        <button type="button" className="btn" href="https://www.linkedin.com"
                                                            style={{fontSize: "1em", backgroundColor: "#51d8af"}}><i
                                                                className="fa fa-linkedin "></i></button>
                                                    </a>

                                                    <a href="https://www.linkedin.com">
                                                        <button type="button" className="btn" href="https://www.linkedin.com"
                                                            style={{fontSize: "1em", backgroundcolor: "#51d8af"}}><i
                                                                className="fa fa-twitter "></i></button>
                                                    </a>

                                                    <a href="https://www.linkedin.com">
                                                        <button type="button" className="btn" href="https://www.linkedin.com"
                                                            style={{fontSize: "1em", backgroundColor: "#51d8af"}}><i
                                                                className="fa fa-github"></i></button>
                                                    </a>

                                                    <a href="https://www.linkedin.com">
                                                        <button type="button" className="btn" href="https://www.linkedin.com"
                                                            style={{fontSize: "1em", backgroundColor: "#51d8af"}}><i
                                                                className="fa fa-google-plus "></i></button>
                                                    </a>
                                                    <a href="https://www.linkedin.com">
                                                        <button type="button" className="btn" href="https://www.linkedin.com"
                                                            style={{fontSize: "1em", backgroundColor: "#51d8af"}}><i
                                                                className="fa fa-facebook "></i></button>
                                                    </a>
                                                </div>
                                            </div>

                                            <hr />
                                            <p className="card-text">m is simply dummy text of the printing and typesetting industry. Lorem
                                                Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                                survived not only five centuries, but also the leap into electronic typesetting,
                                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                Why do we use it?
    
                                                It is a long established fact that a reader will be distracted by the readable content
                                                of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                                more-or-less normal distribution of letters, as opposed to using 'Content here, content
                                                here', making it look like readable English. Many desktop publishing packages and web
                                                page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
                                                ipsum' will uncover many web sites still in their infancy. Various versions have evolved
                                                over the years, sometimes by accident, sometimes on purpose (injected humour and the
                                                like).
                            </p>
                                            <hr />
                                            <div className="container" style={{opacity: "0.8"}}>
                                                <h2>
                                                    Mentors
                                </h2>
                                                <div className="row">
                                                    <div className="col-2 m-2" style={{maxWidth: "12rem"}}>
                                                        <img className="card-img-top" src="/img/pict--customer-female-ivr-people-vector-stencils-library.png" alt="Caasimage cap" />
                                                        <div className="card-body">
                                                            <a><h5 className="card-title" style={{color:"#51d8af"}}>(Name of mentor)</h5></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">

                        <div className="input-group mb-4">
                            <input type="text" className="form-control" placeholder="Enter your review here" aria-describedby="basic-addon2" style={{maxHeight: "25%"}} />
                            <div className="input-group-append">

                                <span style={{background: "none"}} id="basic-addon2">
                                    <a   >
                                        <button className="btn" style={{backgroundColor: "#51d8af"}}>
                                            Submit
                        </button>
                                    </a></span>
                            </div>
                        </div>
                        {/* <div className="row p-4">
                            <div className="col-2">
                                <img src="/img/pict--customer-female-ivr-people-vector-stencils-library.png" alt="asdasd"  style={{maxWidth: "30%"}} />
                                <small className="card-title text-success" style={{color: "#51d8af"}}>(poster)</small>
                            </div>
                            <div className="col-10 mb-2">
                                <p className="card-text text-left">Some quick example text to build on the card title
                                    ome quick example text to build on the card title
                                    ome quick example text to build on the card title
                                    ome quick example text to build on the card title
                                    ome quick example text to build on the card title
                    </p>
                            </div>
                            <hr />

                        </div> */}

                    </div>

            </div>

        );
            }
            }