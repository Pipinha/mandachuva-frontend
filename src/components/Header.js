import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Loader from "./Loader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './../styles/Base.css'
import { PROFILE_CREATOR } from "../constants/Config";
import { Icon } from '@iconify/react';
import { actionDeleteLogin } from "../actions/ActionLogin";

class Header extends Component {
    notShowLogin = ['account-login', 'register']
    logout() {
        this.props.dispatch(actionDeleteLogin)
    }
    render() {
        return (
            <>
                <Loader show={this.props.store.loader} />
                <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                <div className={`page page-${this.props.page}`}>
                    {!this.props.store.session.logged ?
                        (
                            <header className="header-default landpage">
                                <div className="container">
                                    <div className="in d-flex align-items-center">
                                        <div className="logo">
                                            <Link to={'/'}><img src="/assets/img/logo.png" alt="Rainmakr" /></Link>
                                        </div>
                                        <div className="menu flex-fill text-right">
                                            {this.notShowLogin.indexOf(this.props.page) !== -1 ? <></> : <Link className="menu-item" to={'/account/login'}>LOGIN</Link>}
                                        </div>
                                    </div>
                                </div>
                            </header>
                        ) : (
                            <header className="header-default logged">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-3 logo">
                                            <Link to={'/'}><img src="/assets/img/logo.png" alt="Rainmakr" /></Link>
                                        </div>
                                        <div className="col-md-6 search">
                                            <div className="input-icon">
                                                <input type="search" className="form-control text-gray-20" placeholder={this.props.store.session.profileId === PROFILE_CREATOR ? 'Search jobs...' : 'Search creators...'} /><Icon icon="material-symbols:search" width={20} height={20} />
                                            </div>
                                        </div>
                                        <div className="col-md-3 menu d-flex align-items-center justify-content-end">
                                            <Link to={'/creator/profile'} className="menu-item"><Icon icon="material-symbols:space-dashboard-sharp" width={24} height={24} /></Link>
                                            <Link to={'/creator/profile'} className="menu-item"><Icon icon="material-symbols:link-rounded" width={24} height={24} /></Link>
                                            <Link to={'/creator/profile'} className="menu-item"><Icon icon="material-symbols:group-outline-rounded" width={24} height={24} /></Link>
                                            <Link to={'/creator/profile'} className="menu-item"><Icon icon="material-symbols:notifications-outline-rounded" width={24} height={24} /></Link>
                                            <div className="profile d-flex align-items-center">
                                                <img src={this.props.store.session.photo} alt="Rainmakr" className="rounded-circle" />
                                                <Icon icon="material-symbols:arrow-drop-down" width={24} height={24} />
                                                <div className="profile-menu">
                                                    <Link to={'/creator/profile'}>MY PROFILE</Link>
                                                    <a href="#logout" onClick={_ => this.logout()} className="mt-2">LOGOUT</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </header>
                        )}
                    {this.props.children}
                </div>
            </>
        )
    }
}

Header.defaultProps = {
    auth: false,
    page: 'home',
}

const mapPropsToState = function (store) {
    return {
        store: store
    }
}

const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
})

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(Header))