import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'home'
        })
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row block-1 align-items-center mt-6">
                        <div className="col-md-6 text-center">
                            <img src="/assets/img/img-home-1.png" alt="Rainmakr" className="img-fluid" />
                        </div>
                        <div className="col-md-6 d-flex justify-content-center flex-column">
                            <div className="title text-center">BE YOUR BUSINESS MANAGER</div>
                            <div className="caption text-center mt-4 px-4">Sell your content, get jobs, pitch to<br /> brands and be part of the Rain community!</div>
                            <div className="box-button text-center mt-4">
                                <Link to={'/register'} className="btn btn-grad-a with-shadow">Be a Rainmakr</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row block-2 align-items-center mt-6">
                        <div className="col-md-6">
                            <div className="box-brand d-flex flex-column justify-content-center align-items-center">
                                <div className="title text-center">ARE YOU A BRAND?</div>
                                <div className="caption mt-3">Easy, simple and fast!</div>
                                <div className="box-button text-center mt-3">
                                    <Link to={'/register'} className="btn btn-a with-shadow text-white">Check what you can do</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <div className="bg-brand">
                                    <img src="/assets/img/bg-block-2.png" alt="Rainmakr" />
                                    <div className="title-over">CONNECT<br />WITH<br />BRANDS</div>
                                </div>
                                <div className="caption text-center adjust">Rainmakr connects creators with brands to access jobs and sell your never seen ready-to-post content, and make money.<br /><br />Make it rain, be a Rainmakr!</div>
                            </div>
                        </div>
                    </div>
                    <div className="row block-3 mt-6 align-items-center">
                        <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                            <div className="box-info">
                                <div className="title-links">RAINLINKS</div>
                                <div className="caption mt-2">Get your page to share links and receive direct bookings from brands. Set the prices for your content and start selling. Easy, fast, and free.</div>
                            </div>
                            <div className="box-info mt-5">
                                <div className="title-jobs text-right">RAINJOBS</div>
                                <div className="caption text-right mt-2">Access jobs from over 170 platforms in just one place. 1000s of active creators and jobs with the highest response rates.</div>
                            </div>
                        </div>
                        <div className="col-md-4 box-img">
                            <img src="/assets/img/img-links-jobs.png" alt="Rainmakr" className="img-fluid" />
                        </div>
                        <div className="col-md-4">
                            <div className="box-register">
                                <div className="title-register">WHAT ARE YOU<br />WAITING FOR?</div>
                                <div className="caption mt-3">Sign up now and get access to your day-to-day operations platform.</div>
                                <div className="box-btn mt-3">
                                    <Link to={'/register'} className="btn btn-grad-a with-shadow">Be a Rainmakr</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row block-4 mt-6">
                        <div className="col-md-6">
                            <div className="box-img">
                                <div className="title">ARE YOU A BRAND?</div>
                                <div className="caption">Are you tired of searching for creators and managing campaigns?<br /><strong>You're not alone.</strong></div>
                                <div className="img">
                                    <img src="/assets/img/img-block-4.png" alt="Rainmakr" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="infos caption">Most brands and marketers hire ten or more creators annually, trusting their budget to get the needed return. But running influencer marketing campaigns in-house with few resources takes a lot of work. No problem, we got you.<br /><br />In Rainmakr, you select between thousands of creators the best ones for your campaign, directbook them with the highest response rates. Everything is ten times faster and with a <strong>money-back guarantee.</strong></div>
                        </div>
                    </div>
                    <div className="row block-5 align-items-center mt-6">
                        <div className="col-md-4">
                            <div className="brands-title">BE ONE OF OVER<br /><span className="c1">160 BRANDS</span> THAT<br />TRUST US</div>
                        </div>
                        <div className="col-md-4 box-img text-center">
                            <img src="/assets/img/img-brands.png" alt="Rainmakr" className="img-fluid" />
                        </div>
                        <div className="col-md-4">
                            <div className="box-register">
                                <div className="caption text-center">Start searching for creators and<br />posting your jobs now</div>
                                <div className="box-btn text-center mt-3">
                                    <Link to={'/register'} className="btn btn-grad-a with-shadow">Create your account</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer-default">&nbsp;</footer>
            </>
        )
    }
}

const mapPropsToState = function (store) {
    return {
        store: store
    }
}

const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
})

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(Home))