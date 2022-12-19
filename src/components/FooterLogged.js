import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class FooterLogged extends Component {
    render() {
        return (
            <>
                <footer className={'footer-logged '+this.props.className}>
                    <div className="links text-center">
                        <Link to={'/creator/profile'} className="text-steelo-l2">FAQ</Link>&nbsp;&nbsp;
                        <Link to={'/creator/profile'} className="text-steelo-l2">TERMS OF SERVICE</Link>&nbsp;&nbsp;
                        <Link to={'/creator/profile'} className="text-steelo-l2">PRIVACY</Link><br/>
                        <Link to={'/creator/profile'} className="text-steelo-l2">TALK TO US</Link>
                    </div>
                    <div className="logo text-center mt-3">
                        <Link to={'creator/profile'}><img src="/assets/img/logo-footer-logged.png" alt="Rainmakr" /></Link>
                    </div>
                </footer>
            </>
        )
    }
}

FooterLogged.defaultProps = {
    className: '',
}

const mapPropsToState = function (store) {
    return {
        store: store
    }
}

const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
})

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(FooterLogged))