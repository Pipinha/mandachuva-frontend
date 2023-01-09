import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { actionPostLogin } from "../../actions/ActionLogin";

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
    submit() {

        if(!this.state.pass || !this.state.login){
            toast.error('User or password invalid.')
            return;
        }

        if(['company@test.com','creator@test.com'].indexOf(this.state.login)===-1){
            toast.error('User or password invalid.')
            return;
        }

        this.props.dispatch(actionPostLogin({
            login: this.state.login,
            pass: this.state.pass,
        }))
    }

    render() {
        return (
            <>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="box-central mt-6 mb-6">
                        <div className="in">
                            <div className="logo d-flex align-items-center justify-content-center">
                                <img src="/assets/img/logo-login.png" alt="Rainmaker" />
                            </div>
                            <div className="mt-3">
                                <h2 className="text-grad-hot-pink">SIGN IN</h2>
                                <h4 className="text-white mt-3">AND START TO ...</h4>
                            </div>
                            <div className="mt-3">
                                <form onSubmit={e => { e.preventDefault(); this.submit() }}>
                                    <div>
                                        <input type="text" className="form-control with-label" value={this.state.login} onChange={(e) => this.setState({ login: e.target.value })} placeholder="Login" />
                                    </div>
                                    <div className="mt-3">
                                        <input type="password" className="form-control with-label" value={this.state.pass} onChange={(e) => this.setState({ pass: e.target.value })} placeholder="Password" />
                                    </div>
                                    <div className="text-right">
                                        <Link to={'/account/forgot'} className="text-pitaya">Forgot password ?</Link>
                                    </div>
                                    <div className="mt-3">
                                        <button type="submit" className="btn btn-a btn-block with-shadow">Login</button>
                                    </div>
                                    <h5 className="text-gray-30 text-center mt-4">OR CONTINUE WITH</h5>
                                    <div className="d-flex justify-content-center mt-4">
                                        <a href="https://facebook.com.br"><img src="/assets/img/ico-facebook.png" alt="Rainmakr" /></a>
                                        <a href="https://google.com.br" className="ml-2"><img src="/assets/img/ico-google.png" alt="Rainmakr" /></a>
                                    </div>
                                    <div className="line-sep bg-steelo-l2 mt-4">&nbsp;</div>
                                    <div>
                                        <h6 className="text-white mt-4">IF YOU DON’T HAVE AN ACCOUNT <Link to={'/register'} className="h6 text-blueberry-l2">REGISTER HERE !</Link></h6>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix mt-5"></div>
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