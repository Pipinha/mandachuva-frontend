import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Register extends Component {
    render() {
        return (
            <>
                Register
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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(Register))