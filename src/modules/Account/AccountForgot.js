import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import history from "../../routes/history";

class AccountForgot extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'account-forgot'
        })

        this.state = {
            login: '',
        }
    }
    submit() {
        history.push('/account/login')
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
                                <h2 className="text-grad-hot-pink t1">FORGOT PASSWORD?</h2>
                                <h4 className="text-white mt-3 t2">PLEASE ENTER THE ADDRESS ASSOCIATED WHIT YOUR ACCOUNT. </h4>
                                <div className="text-white mt-4">We will send a verification mail to tour registered email id</div>
                            </div>
                            <div className="mt-3">
                                <form onSubmit={e => { e.preventDefault(); this.submit() }}>
                                    <div>
                                        <input type="text" className="form-control with-label" value={this.state.login} onChange={(e) => this.setState({ login: e.target.value })} placeholder="Email ID" />
                                    </div>
                                    <div className="mt-3">
                                        <button type="submit" className="btn btn-f btn-block with-shadow">Submit</button>
                                    </div>
                                    <div className="line-sep bg-steelo-l2 mt-4">&nbsp;</div>
                                    <div>
                                        <h6 className="text-white mt-4">ALREADY HAVE AN ACCONT? <Link to={'/register'} className="h6 text-blueberry-l2">REGISTER HERE !</Link></h6>
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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(AccountForgot))