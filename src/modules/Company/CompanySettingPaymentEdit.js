import { Icon } from "@iconify/react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import FooterLogged from "../../components/FooterLogged";
import history from "../../routes/history";

class CompanySettingPaymentEdit extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'company-setting-payment-edit'
        })

        this.state = {
            cardNumber: '',
            holderName: '',
            cardExpired: '',
            cardCVV: '',
            phone: '',
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
        history.push('/company/setting/payment')
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
                                    <div className="item-menu mt-2">
                                        <Link to={'/company/setting/privacy'}><Icon icon="ic:outline-privacy-tip" width={14} height={14} /> Privacy and security</Link>
                                    </div>
                                    <div className="sep mt-2"></div>
                                    <div className="item-menu active mt-2">
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
                                    <div className="tit2 text-white">ADD A NEW PAYMMENT</div>
                                    <div className="sep mt-2"></div>
                                    <form onSubmit={e => { e.preventDefault(); this.submit() }} className="mt-3">
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <div className="form-row">
                                                    <div className="col-md-12">
                                                        <label className="text-steelo-l2">CREDIT CARD NUMBER</label>
                                                        <div className="d-flex mt-1">
                                                            <img src="/assets/img/mastercard.png" alt="Rainmakr" />
                                                            <img src="/assets/img/mastercard.png" alt="Rainmakr" className="ml-2" />
                                                            <img src="/assets/img/mastercard.png" alt="Rainmakr" className="ml-2" />
                                                        </div>
                                                        <input type="text" className="form-control with-label mt-2" value={this.state.cardNumber} onChange={(e) => this.setState({ cardNumber: e.target.value })} placeholder="XXXX XXXX XXXX XXXX" />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="col-md-12">
                                                        <label className="text-steelo-l2">CARD HOLDER NAME</label>
                                                        <input type="text" className="form-control with-label" value={this.state.holderName} onChange={(e) => this.setState({ holderName: e.target.value })} placeholder="CARD HOLDER NAME" />
                                                    </div>
                                                </div>
                                                <div className="form-row mt-2">
                                                    <div className="col-md-6">
                                                        <label className="text-steelo-l2">EXPIRY</label>
                                                        <input type="text" className="form-control with-label" value={this.state.cardExpired} onChange={(e) => this.setState({ cardExpired: e.target.value })} placeholder="MM/YY" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="text-steelo-l2">CVV</label>
                                                        <input type="text" className="form-control with-label" value={this.state.cardCVV} onChange={(e) => this.setState({ cardCVV: e.target.value })} placeholder="000" />
                                                    </div>
                                                </div>
                                                <div className="form-row mt-2">
                                                    <div className="col-md-12">
                                                        <label className="text-steelo-l2">PHONE</label>
                                                        <input type="text" className="form-control with-label" value={this.state.phone} onChange={(e) => this.setState({ phone: e.target.value })} placeholder="+00000000" />
                                                    </div>
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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(CompanySettingPaymentEdit))