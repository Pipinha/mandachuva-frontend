import { Icon } from "@iconify/react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { toast } from "react-toastify";
import FooterLogged from "../../components/FooterLogged";

class CompanySetting extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'company-setting'
        })

        this.state = {
            name: '',
            website: '',
            city: '',
            segments: [
                {
                    id: 1,
                    description: 'Lifestyle'
                }
            ],
            blockers: [
                {
                    id: 1,
                    description: 'Adult Content'
                }
            ]
        }
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
                                    <Link to={'/company/setting'} className="txt active">SETTINGS</Link>
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
                                    <div className="item-menu active mt-2">
                                        <Link to={'/company/setting'}><Icon icon="ic:baseline-person-outline" width={14} height={14} /> Profile settings</Link>
                                    </div>
                                    <div className="sep mt-2"></div>
                                    <div className="item-menu mt-2">
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
                                    <div className="title2 text-white">PROFILE SETTINGS</div>
                                    <div className="sep mt-2"></div>
                                    <form onSubmit={e => { e.preventDefault(); this.submit() }} className="mt-3">
                                        <div className="change-photo">
                                            <div className="in d-flex flex-column align-items-center">
                                                <img src="/assets/img/user-company.png" alt="Rainmakr" />
                                                <div className="text-white mt-2 upload">CHANGE AVATAR</div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-5">
                                                <label className="text-steelo-l2">COMPANY NAME</label>
                                                <input type="text" className="form-control with-label" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} placeholder="COMPANY NAME" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-5">
                                                <label className="text-steelo-l2">WEBSITE</label>
                                                <input type="text" className="form-control with-label" value={this.state.website} onChange={(e) => this.setState({ website: e.target.value })} placeholder="WEBSITE" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-5">
                                                <label className="text-steelo-l2">CITY</label>
                                                <input type="text" className="form-control with-label" value={this.state.city} onChange={(e) => this.setState({ city: e.target.value })} placeholder="CITY" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-5">
                                                <label className="text-steelo-l2">SEGMENT</label>
                                                <Typeahead
                                                    id="segments"
                                                    labelKey="description"
                                                    multiple
                                                    onChange={(e) => this.setState({ segments: e })}
                                                    options={[
                                                        {
                                                            id: 1,
                                                            description: 'Lifestyle'
                                                        },
                                                        {
                                                            id: 2,
                                                            description: 'Fashion'
                                                        }
                                                    ]}
                                                    placeholder="Add your segments here"
                                                    selected={this.state.segments}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-5">
                                                <label className="text-steelo-l2">BLOCKERS</label>
                                                <Typeahead
                                                    id="blockers"
                                                    labelKey="description"
                                                    multiple
                                                    onChange={(e) => this.setState({ blockers: e })}
                                                    options={[
                                                        {
                                                            id: 1,
                                                            description: 'Adult Content'
                                                        }
                                                    ]}
                                                    placeholder="Add your blockers here"
                                                    selected={this.state.blockers}
                                                />
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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(CompanySetting))