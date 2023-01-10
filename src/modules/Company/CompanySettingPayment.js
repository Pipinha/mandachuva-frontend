import { Icon } from "@iconify/react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import FooterLogged from "../../components/FooterLogged";
import history from "../../routes/history";

class CompanySettingPayment extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'company-setting-payment'
        })

        this.state = {
            cards: [
                {
                    brand: '/assets/img/mastercard.png',
                    bank: 'AXIS BANK XXXX 4468',
                },
                {
                    brand: '/assets/img/mastercard.png',
                    bank: 'AXIS BANK XXXX 4468',
                },
                {
                    brand: '/assets/img/mastercard.png',
                    bank: 'AXIS BANK XXXX 4468',
                }
            ],
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

    deleteItem(idx) {
        Swal.fire({
            title: 'Are you sure you want to delete?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Yes',
            denyButtonText: 'No',
            background: '#273539',
            color: '#fff',
        }).then((result) => {
            if (result.isConfirmed) {
                let newArr = [];
                for (let i = 0; i < this.state.cards.length; i++) {
                    if (i !== idx) {
                        newArr.push(this.state.cards[i])
                    }
                }
                this.setState({ cards: newArr })
                toast.success('Delete success!', {
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
        })
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
                                    <div className="title2 text-white">SETTINGS MENU</div>
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
                                    <div className="title2 text-white">PAYMENT</div>
                                    <div className="sep mt-2"></div>
                                    <form onSubmit={e => { e.preventDefault(); this.submit() }} className="mt-3">
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label className="text-steelo-l2">MY PAYMENTS METHODYS</label>
                                                <div className="credit-list mt-1">
                                                    {this.state.cards.map((a, ai) => (
                                                        <div className="credit-item d-flex align-items-center justify-content-between">
                                                            <div className="brand">
                                                                <img src={a.brand} alt="Rainmakr" />
                                                            </div>
                                                            <div className="name flex-fill ml-2" onClick={_ => history.push('/company/setting/payment/3')}>{a.bank}</div>
                                                            <div className="options">
                                                                <span className="option-btn bg-orange">
                                                                    <Icon icon="tabler:trash" width={16} height={16} onClick={_ => this.deleteItem(ai)} />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="sep mt-3"></div>
                                                <div className="credit-add" onClick={_ => history.push('/company/setting/payment/0')}>
                                                    <span className="ico bg-pitaya"><Icon icon="material-symbols:add" width={16} height={16} /></span>
                                                    <div className="txt ml-2">ADD A PAYMENT</div>
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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(CompanySettingPayment))