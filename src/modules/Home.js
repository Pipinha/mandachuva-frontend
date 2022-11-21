import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Button from "../components/Button";

class Home extends Component {

    render() {
        return (
            <>
                <Button>Enabled</Button>
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