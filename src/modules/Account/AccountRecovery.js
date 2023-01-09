import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import history from "../../routes/history";

class AccountForgot extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'account-recovery'
        })

        this.state = {
            pass: '',
            passConfirm: '',
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
                                <h4 className="text-white mt-3 t2">PLEASE ENTER A NEW PASSWORD </h4>
                            </div>
                            <div className="mt-3">
                                <form onSubmit={e => { e.preventDefault(); this.submit() }}>
                                    <div>
                                        <input type="password" className="form-control with-label" value={this.state.pass} onChange={(e) => this.setState({ pass: e.target.value })} placeholder="Enter a new Password" />
                                    </div>
                                    <div className="mt-3">
                                        <input type="password" className="form-control with-label" value={this.state.passConfirm} onChange={(e) => this.setState({ passConfirm: e.target.value })} placeholder="Confirm Password" />
                                    </div>
                                    <div className="mt-3">
                                        <button type="submit" className="btn btn-f btn-block with-shadow">Submit</button>
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