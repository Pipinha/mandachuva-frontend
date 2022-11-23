import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class Home extends Component {
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
                            <div className="caption mt-4 px-4">Sell your content, get jobs, pitch to<br /> brands and be part of the Rain community!</div>
                            <div className="box-button text-center mt-4">
                                <Link to={'/'} className="btn btn-grad-a with-shadow">Be a Rainmakr</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row block-2 align-items-center mt-6">
                        <div className="col-md-6">
                            <div className="box-brand d-flex flex-column justify-content-center align-items-center">
                                <div className="title text-center">ARE YOU A BRAND?</div>
                                <div className="caption mt-3">Easy, simple and fast!</div>
                                <div className="box-button text-center mt-3">
                                    <Link to={'/'} className="btn btn-a with-shadow text-white">Check what you can do</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <div className="bg-brand">
                                    <img src="/assets/img/bg-block-2.png" alt="Rainmakr" />
                                    <div className="title-over">CONNECT<br />WITH<br />BRANDS</div>
                                </div>
                                <div className="caption adjust">Rainmakr connects creators with brands to access jobs and sell your never seen ready-to-post content, and make money.<br /><br />Make it rain, be a Rainmakr!</div>
                            </div>
                        </div>
                    </div>
                </div>
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