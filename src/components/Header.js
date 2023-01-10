import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Loader from "./Loader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './../styles/Base.css'
import { PROFILE_COMPANY, PROFILE_CREATOR } from "../constants/Config";
import { Icon } from '@iconify/react';
import { actionDeleteLogin } from "../actions/ActionLogin";

class Header extends Component {
    notShowLogin = ['account-login', 'register']
    constructor(props) {
        super(props)

        this.state = {
            displayMob: 'none',
        }
    }
    toggleMenuMob() {
        if (this.state.displayMob === 'none') {
            this.setState({ displayMob: 'block' })
        } else {
            this.setState({ displayMob: 'none' })
        }
    }
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
                        ) : ''}
                    {this.props.store.session.logged && this.props.store.session.profileId === PROFILE_CREATOR ? (
                        <header className="header-default logged">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-3 logo">
                                        <Link to={'/'}><img src="/assets/img/logo.png" alt="Rainmakr" /></Link>
                                        <div className="menu-mob d-block d-sm-none float-right" onClick={_ => this.toggleMenuMob()}>
                                            <Icon icon="material-symbols:menu-rounded" width={24} height={24} className="text-white" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-none d-sm-block">
                                        <div className="search">
                                            <div className="input-icon">
                                                <input type="search" className="form-control text-gray-20" placeholder={this.props.store.session.profileId === PROFILE_CREATOR ? 'Search jobs...' : 'Search creators...'} /><Icon icon="material-symbols:search" width={20} height={20} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-none d-sm-block">
                                        <div className="menu d-flex align-items-center justify-content-end">
                                            <Link to={'/creator/ready-to-post'} className="menu-item"><Icon icon="material-symbols:space-dashboard-sharp" width={24} height={24} /></Link>
                                            <Link to={'/creator/ariel'} className="menu-item"><Icon icon="material-symbols:link-rounded" width={24} height={24} /></Link>
                                            <Link to={'/creator/profile'} className="menu-item"><Icon icon="material-symbols:group-outline-rounded" width={24} height={24} /></Link>
                                            <Link to={'/creator/profile'} className="menu-item"><Icon icon="material-symbols:notifications-outline-rounded" width={24} height={24} /></Link>
                                            <div className="profile d-flex align-items-center">
                                                <img src={this.props.store.session.photo} alt="Rainmakr" className="rounded-circle" />
                                                <Icon icon="material-symbols:arrow-drop-down" width={24} height={24} />
                                                <div className="profile-menu">
                                                    <Link to={'/creator/profile'}>MY PROFILE</Link>
                                                    <Link to={'/creator/setting'} className="mt-2">SETTING</Link>
                                                    <Link to={'/creator/rainjobs'} className="mt-2">RAINJOBS</Link>
                                                    <a href="#logout" onClick={_ => this.logout()} className="mt-2">LOGOUT</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-mob-sub" style={{ display: this.state.displayMob }} onClick={_ => this.toggleMenuMob()}>
                                <div className="p-3">
                                    <div className="menu-mob-item text-center">
                                        <Link to={'/creator/profile'}><img src={this.props.store.session.photo} alt="Rainmakr" className="rounded-circle" /></Link>
                                    </div>
                                    <div className="menu-mob-item">
                                        <Link to={'/creator/setting'} className="text-blueberry"><Icon icon="mdi:account-cog-outline" className="text-white" width={24} height={24} /> SETTING</Link>
                                    </div>
                                    <div className="menu-mob-item">
                                        <Link to={'/creator/profile'} className="text-blueberry"><Icon icon="material-symbols:notifications-outline-rounded" className="text-white" width={24} height={24} /> NOTIFICATIONS</Link>
                                    </div>
                                    <div className="menu-mob-item">
                                        <Link to={'/creator/ready-to-post'} className="text-blueberry"><Icon icon="material-symbols:space-dashboard-sharp" className="text-white" width={24} height={24} /> READY TO POST</Link>
                                    </div>
                                    <div className="menu-mob-item">
                                        <Link to={'/creator/ariel'} className="text-blueberry"><Icon icon="material-symbols:link-rounded" className="text-white" width={24} height={24} /> RAINLINKS</Link>
                                    </div>
                                    <div className="menu-mob-item">
                                        <Link to={'/creator/profile'} className="text-blueberry"><Icon icon="material-symbols:group-outline-rounded" className="text-white" width={24} height={24} /> GROUPS</Link>
                                    </div>
                                    <div className="menu-mob-item">
                                        <Link to={'/creator/rainjobs'} className="text-blueberry"><Icon icon="material-symbols:home-work-outline" className="text-white" width={24} height={24} /> RAINJOBS</Link>
                                    </div>
                                    <div className="menu-mob-item">
                                        <a href="#logout" onClick={_ => this.logout()} className="text-blueberry"><Icon icon="material-symbols:logout-rounded" className="text-white" width={24} height={24} /> LOGOUT</a>
                                    </div>

                                </div>
                            </div>
                        </header>
                    ) : ''}
                    {this.props.store.session.logged && this.props.store.session.profileId === PROFILE_COMPANY ? (
                        <header className="header-default logged">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-3 logo">
                                        <Link to={'/'}><img src="/assets/img/logo.png" alt="Rainmakr" /></Link>
                                        <div className="menu-mob d-block d-sm-none float-right" onClick={_ => this.toggleMenuMob()}>
                                            <Icon icon="material-symbols:menu-rounded" width={24} height={24} className="text-white" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-none d-sm-block">
                                        <div className="search">
                                            <div className="input-icon">
                                                <input type="search" className="form-control text-gray-20" placeholder={this.props.store.session.profileId === PROFILE_CREATOR ? 'Search jobs...' : 'Search creators...'} /><Icon icon="material-symbols:search" width={20} height={20} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-none d-sm-block">
                                        <div className="menu d-flex align-items-center justify-content-end">
                                            <Link to={'/company/profile'} className="menu-item"><Icon icon="material-symbols:notifications-outline-rounded" width={24} height={24} /></Link>
                                            <Link to={'/company/ready-to-post'} className="menu-item"><Icon icon="material-symbols:space-dashboard-sharp" width={24} height={24} /></Link>
                                            <div className="profile d-flex align-items-center">
                                                <img src={this.props.store.session.photo} alt="Rainmakr" className="rounded-circle" />
                                                <Icon icon="material-symbols:arrow-drop-down" width={24} height={24} />
                                                <div className="profile-menu">
                                                    <Link to={'/company/profile'}>MY PROFILE</Link>
                                                    <Link to={'/company/setting'} className="mt-2">SETTING</Link>
                                                    <a href="#logout" onClick={_ => this.logout()} className="mt-2">LOGOUT</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-mob-sub" style={{ display: this.state.displayMob }} onClick={_ => this.toggleMenuMob()}>
                                <div className="p-3">
                                    <div className="menu-mob-item text-center">
                                        <Link to={'/company/profile'}><img src={this.props.store.session.photo} alt="Rainmakr" className="rounded-circle" /></Link>
                                    </div>
                                    <div className="menu-mob-item">
                                        <Link to={'/company/setting'} className="text-blueberry"><Icon icon="mdi:account-cog-outline" className="text-white" width={24} height={24} /> SETTING</Link>
                                    </div>
                                    <div className="menu-mob-item">
                                        <a href="#logout" onClick={_ => this.logout()} className="text-blueberry"><Icon icon="material-symbols:logout-rounded" className="text-white" width={24} height={24} /> LOGOUT</a>
                                    </div>
                                </div>
                            </div>
                        </header>
                    ) : ''}
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