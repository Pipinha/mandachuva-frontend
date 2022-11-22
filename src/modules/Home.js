import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row block-1 align-items-center mt-4">
                        <div className="col-md-6 text-center">
                            <img src="/assets/img/img-home-1.png" alt="Rainmakr" />
                        </div>
                        <div className="col-md-6">
                            <div className="title">BE YOUR BUSINESS MANAGER</div>
                            <div className="caption mt-4">Sell your content, get jobs, pitch to brands and be part of the Rain community!</div>
                            <div className="box-button">
                                <Link class="btn">Be a Rainmakr</Link>
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