import { Component } from "react";
import { connect } from "react-redux";
import { /* Link, */ withRouter } from "react-router-dom";

class Home extends Component {

    render() {
        return (
            <div className="card-custom">
                <div className="card-body">
                    <p className="card-text">Bem vindo ao sistema colaborador</p>
                </div>
            </div>
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