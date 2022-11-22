import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/assets/img/img-home-1.png" alt="Rainmakr" />
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