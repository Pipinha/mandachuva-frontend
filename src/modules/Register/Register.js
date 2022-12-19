import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { actionPostRegister } from "../../actions/ActionRegister";

class Register extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'register'
        })

        this.state = {
            firstname: '',
            lastname: '',
            location: {
                lat: '',
                lng: '',
                name: '',
            },
            phone: '',
            pass: '',
            passConfirm: '',
        }
    }
    submit() {
        this.props.dispatch(actionPostRegister({
            firstname: '',
            lastname: '',
            location: {
                lat: '',
                lng: '',
                name: '',
            },
            phone: '',
            pass: '',
            passConfirm: '',
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
                                <h2 className="text-grad-hot-pink">EASY TO START</h2>
                                <h4 className="text-white mt-3">COMPLETE YOUR PROFILE</h4>
                            </div>
                            <div className="mt-3">
                                <form onSubmit={e => { e.preventDefault(); this.submit() }}>
                                    <div>
                                        <input type="text" className="form-control with-label" value={this.state.firstname} onChange={(e) => this.setState({ firstname: e.target.value })} placeholder="First Name" />
                                    </div>
                                    <div className="mt-3">
                                        <input type="text" className="form-control with-label" value={this.state.lastname} onChange={(e) => this.setState({ lastname: e.target.value })} placeholder="Last Name" />
                                    </div>
                                    <div className="mt-3">
                                        <input type="email" className="form-control with-label" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} placeholder="Email" />
                                    </div>
                                    <div className="mt-3">
                                        <input type="text" className="form-control with-label" placeholder="Enter a Location" />
                                    </div>
                                    <div className="mt-3">
                                        <input type="text" className="form-control with-label" value={this.state.phone} onChange={(e) => this.setState({ phone: e.target.value })} placeholder="Phone" />
                                    </div>
                                    <div className="mt-3">
                                        <input type="password" className="form-control with-label" value={this.state.pass} onChange={(e) => this.setState({ pass: e.target.value })} placeholder="Create a password" />
                                    </div>
                                    <div className="mt-3">
                                        <input type="password" className="form-control with-label" value={this.state.passConfirm} onChange={(e) => this.setState({ passConfirm: e.target.value })} placeholder="Confirm your password" />
                                    </div>
                                    <div className="mt-3">
                                        <button type="submit" className="btn btn-a btn-block with-shadow">Register now!</button>
                                    </div>
                                    <div className="mt-4">
                                        <h6 className="text-white">ALREADY HAVE AN ACCONT? <Link to={'/account/login'} className="h6 text-blueberry-l2">ENTER HERE !</Link></h6>
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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(Register))