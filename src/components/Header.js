import { Component } from "react";
import { connect } from "react-redux";
import { /* Link, */ withRouter } from "react-router-dom";
import Loader from "./Loader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import { callAuthDelete } from "../actions/Auth";

class Header extends Component {
    render() {
        /* if (this.props.store.first) {
            return <Loader show={true} />
        } */

        return (
            <>
                <Loader show={this.props.store.loader} />
                <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                {this.props.store.session.logged ?
                    <>
                        header logged
                    </> : this.props.children}
            </>
        )
    }
}

/* Header.defaultProps = {
} */

const mapPropsToState = function (store) {
    return {
        store: store
    }
}

const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
})

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(Header))