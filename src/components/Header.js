import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Loader from "./Loader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './../styles/Base.css'

class Header extends Component {
    notShowLogin = ['account-login']
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
                                    <div className="in d-flex align-items-center">
                                        <div className="logo">
                                            <Link to={'/'}><img src="/assets/img/logo.png" alt="Rainmakr" /></Link>
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