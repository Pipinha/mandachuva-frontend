import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class AccountLogin extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'account-login'
        })

        this.state = {
            login: '',
            pass: '',
        }
    }
    loginSubmit() {

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
                            <div className="mt-4">
                                <h2 className="text-grad-hot-pink">SIGN IN</h2>
                                <h4 className="text-white mt-3">AND START TO ...</h4>
                            </div>
                            <div className="mt-5">
                                <form onSubmit={e => { e.preventDefault(); this.loginSubmit() }}>
                                    <div>
                                        <input type="text" className="form-control with-label" value={this.state.login} onChange={(e) => this.setState({ login: e.target.value })} placeholder="Login" />
                                    </div>
                                    <div className="mt-3">
                                        <input type="password" className="form-control with-label" value={this.state.pass} onChange={(e) => this.setState({ pass: e.target.value })} placeholder="Password" />
                                    </div>
                                    <div className="text-right">
                                        <Link to={'/'} className="text-pitaya">Forgot password ?</Link>
                                    </div>
                                    <div className="mt-3">
                                        <button type="submit" className="btn btn-a btn-block with-shadow">Login</button>
                                    </div>
                                </form>
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