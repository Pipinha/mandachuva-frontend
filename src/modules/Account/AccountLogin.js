import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class AccountLogin extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'account-login'
        })
    }
    render() {
        return (
            <>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="box-central mt-6">
                        <div className="in">
                            <div className="logo d-flex align-items-center justify-content-center">
                                <img src="/assets/img/logo-login.png" alt="Rainmaker" />
                            </div>
                            <div>
                                <h2 className="text-grad-hot-pink">SIGN IN</h2>
                                <h4 className="text-white mt-3">AND START TO ...</h4>
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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(AccountLogin))