import React from 'react';
export class StartupAbout extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [{
                head: 'Top 5 Free Online Blockchain Course to break into the industry today', tech: ['web', 'Python ', 'R'], blog: 'Blockchain Technology is moving beyond the hype and literally knocking on every industry to enable disruption.Top-25 business schools are literally racing to incorporate blockchain course into their curriculum.2017 is poised to be the year when Blockchain gains early adoption from leading conglomerates & incumbents.The revolutionary potential of bitcoin’s underlying technology is the sexiest topic in markets around the globe.McKinsey Co. report provides a visual roadmap for how it expects this transition to play out.With all its much hyped about benefits, McKinsey argues the rollout of the technology will occur in four stages'
            }, { head: 'This is head', tech: ['web', 'Python ', 'R'], blog: 'zxczxczxc' }, { head: 'This is head', tech: ['web', 'Python ', 'R'], blog: 'zxczxczxc' }],
            show: []
        }
    }
    componentDidMount() {
        this.setState({ show: this.state.data })
    }
    render() {
        return (
            <div className="container-fluid mt-4" style={{ zIndex: "999", maxWidth: "80%" }}>
                <div className="row row-offcanvas row-offcanvas-right">

                    <div className="col-12 col-md-12">

                        <div className="jumbotron" style={{ textAlign: 'center' }}>
                            <h3><strong>Read and learn from theses articles written by our best mentors</strong></h3>
                            <p>Weather it's growth, finances and skills development, we will find the right mentor for you</p>
                            <input type='text' className="input-group" placeholder="Blog Serches" onKeyDown={(e) => {
                                if (this.state.data.length > 0)
                                    for (let x of this.state.data) {
                                        this.setState({ show: [] })
                                        if (x.head.includes(e.target.value) || x.blog.includes(e.target.value)) {
                                            this.setState({ show: [...this.state.show, x] })
                                        } else if (e.target.value === '') {
                                            this.setState({ show: this.state.data });
                                        }
                                    }
                            }} />
                        </div>

                        {this.state.show.map((ele) => {
                            return (
                                <div className="row mb-3" >
                                    <div className="card col-12">
                                        <div className="card-body">
                                            <h3 className="card-title">{ele.head} </h3>
                                            <span>
                                                {ele.tech.map((element) => {
                                                    return (
                                                        <button type="button" className="btn disabled btn-outline-secondary">{element} </button>
                                                    )
                                                })}
                                                <hr />
                                            </span>
                                            <h5>
                                                {ele.blog}                            </h5>
                                        </div>
                                    </div>

                                </div>

                            )
                        })}
                    </div>

                </div>
            </div>
        )
    }
}