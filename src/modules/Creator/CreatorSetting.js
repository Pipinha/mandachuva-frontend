import { Icon } from "@iconify/react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { toast } from "react-toastify";

class CreatorSetting extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'creator-setting'
        })

        this.state = {
            firstname: '',
            lastname: '',
            pronoum: '',
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
                                    <div className="txt text-white">SETTINGS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="back-to mt-3">
                        <Link onClick={_ => window.history.back()} className="text-blueberry"><Icon icon="material-symbols:arrow-back-ios-new-rounded" width={14} height={14} /> Back to Dashboard</Link>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-3">
                            <div className="card-custom p-3">
                                <div className="simple">
                                    <div className="title2 text-white">SETTINGS MENU</div>
                                    <div className="sep mt-2"></div>
                                    <div className="item-menu active mt-2">
                                        <Link to={'/creator/setting'}><Icon icon="ic:baseline-person-outline" width={14} height={14} /> Profile settings</Link>
                                    </div>
                                    <div className="sep mt-2"></div>
                                    <div className="item-menu mt-2">
                                        <Link to={'/creator/setting/social'}><Icon icon="mdi:instagram" width={14} height={14} /> Social Media</Link>
                                    </div>
                                    <div className="sep mt-2"></div>
                                    <div className="item-menu mt-2">
                                        <Link to={'/creator/setting/privacy'}><Icon icon="ic:outline-privacy-tip" width={14} height={14} /> Privacy and security</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="card-custom p-3">
                                <div className="simple">
                                    <div className="title2 text-white">PROFILE SETTINGS</div>
                                    <div className="sep mt-2"></div>
                                    <form onSubmit={e => { e.preventDefault(); this.submit() }} className="mt-3">
                                        <div className="form-row">
                                            <div className="col-md-5">
                                                <label className="text-steelo-l2">FIRST NAME</label>
                                                <input type="text" className="form-control with-label" value={this.state.firstname} onChange={(e) => this.setState({ firstname: e.target.value })} placeholder="FIRST NAME" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-5">
                                                <label className="text-steelo-l2">LAST NAME</label>
                                                <input type="text" className="form-control with-label" value={this.state.lastname} onChange={(e) => this.setState({ lastname: e.target.value })} placeholder="LAST NAME" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-5">
                                                <label className="text-steelo-l2">PRONOUM</label>
                                                <input type="text" className="form-control with-label" value={this.state.pronoum} onChange={(e) => this.setState({ pronoum: e.target.value })} placeholder="PRONOUM" />
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
                                                    onChange={(e) => this.setState({ segments: e })}
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
                                        <div className="text-right">
                                            <Link to={'/creator/profile'} className="btn btn-no">Cancel</Link>
                                            <button type="submit" className="btn btn-submit with-shadow">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix mt-4"></div>
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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(CreatorSetting))