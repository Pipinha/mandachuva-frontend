import { Icon } from "@iconify/react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import FooterLogged from "../../components/FooterLogged";

class CompanySettingPrivacy extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'company-setting-privacy'
        })

        this.state = {
            contact: '',
            email: '',
            phone: '',
            password: ''
        }

    }
    init() {
        this.setState({ integraded: true })
    }
    submit() {
        toast.success('Save success!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    render() {
        return (
            <>
                <div className="title">
                    <img src="/assets/img/bg-internal.png" alt="Rainmkr" className="bg" />
                    <div className="infos">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <Link to={'/company/setting/privacy'} className="txt active">SETTINGS</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="back-to mt-3">
                        <Link to={'/company/profile'} className="text-blueberry d-flex align-items-center"><Icon icon="material-symbols:arrow-back-ios-new-rounded" width={12} height={12} className="mr-1" /> Back to Dashboard</Link>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-3">
                        <div className="card-custom p-3">
                                <div className="simple">
                                    <div className="tit2 text-white">SETTINGS MENU</div>
                                    <div className="sep mt-2"></div>
                                    <div className="item-menu mt-2">
                                        <Link to={'/company/setting'}><Icon icon="ic:baseline-person-outline" width={14} height={14} /> Profile settings</Link>
                                    </div>
                                    <div className="sep mt-2"></div>
                                    <div className="item-menu active mt-2">
                                        <Link to={'/company/setting/privacy'}><Icon icon="ic:outline-privacy-tip" width={14} height={14} /> Privacy and security</Link>
                                    </div>
                                    <div className="sep mt-2"></div>
                                    <div className="item-menu mt-2">
                                        <Link to={'/company/setting/payment'}><Icon icon="ic:outline-privacy-tip" width={14} height={14} /> Payment</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 d-block d-sm-none"></div>
                            <FooterLogged className="mt-3 d-none d-sm-block" />
                        </div>
                        <div className="col-md-9">
                            <div className="card-custom p-3">
                                <div className="simple">
                                    <div className="tit2 text-white">PRIVACY AND SECURITY</div>
                                    <div className="sep mt-2"></div>
                                    <form onSubmit={e => { e.preventDefault(); this.submit() }} className="mt-3">
                                        <div className="form-row">
                                            <div className="col-md-5">
                                                <label className="text-steelo-l2">CONTACT NAME</label>
                                                <input type="text" className="form-control with-label" value={this.state.contact} onChange={(e) => this.setState({ contact: e.target.value })} placeholder="CONTACT NAME" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-5">
                                                <label className="text-steelo-l2">EMAIL</label>
                                                <input type="text" className="form-control with-label" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} placeholder="your-email@domain.com" />
                                            </div>
                                        </div>
                                        <div className="form-row mt-2">
                                            <div className="col-md-5">
                                                <label className="text-steelo-l2">PHONE</label>
                                                <input type="text" className="form-control with-label" value={this.state.phone} onChange={(e) => this.setState({ phone: e.target.value })} placeholder="+00000000" />
                                            </div>
                                        </div>
                                        <div className="form-row mt-2">
                                            <div className="col-md-5">
                                                <label className="text-steelo-l2">Password</label>
                                                <input type="password" className="form-control with-label" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} placeholder="Password" />
                                            </div>
                                        </div>
                                        <div className="tit2 text-white mt-6">RAINBOT NOTIFICATION</div>
                                        <div className="sep mt-2"></div>
                                        <div className="form-row mt-2">
                                            <div className="col-md-4">
                                                <div className="d-flex text-white align-items-center">
                                                    <label className="custom-switch mr-2">
                                                        <input type="checkbox" />
                                                        <span className="slider round"></span>
                                                    </label>
                                                    <div className="checkbox">Bot status: <span className="text-bold">On</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right mt-3">
                                            <Link to={'/company/profile'} className="btn btn-no">Cancel</Link>
                                            <button type="submit" className="btn btn-submit with-shadow">Save</button>
                                        </div>
                                    </form>
                                </div>
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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(CompanySettingPrivacy))