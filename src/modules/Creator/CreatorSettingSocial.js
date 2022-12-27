import { Icon } from "@iconify/react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import FooterLogged from "../../components/FooterLogged";

class CreatorSettingSocial extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'creator-setting-social'
        })

        this.state = {
            integraded: false,
            storiesPrice: '$1,000',
            reelsPrice: '$1,000',
            feedPrice: '$1,000',
            consult: false
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
                                    <Link to={'/creator/setting/social'} className="txt active">SETTINGS</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="back-to mt-3">
                        <Link to={'/creator/profile'} className="text-blueberry d-flex align-items-center"><Icon icon="material-symbols:arrow-back-ios-new-rounded" width={12} height={12} className="mr-1" /> Back to Dashboard</Link>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-3">
                            <div className="card-custom p-3">
                                <div className="simple">
                                    <div className="title2 text-white">SETTINGS MENU</div>
                                    <div className="sep mt-2"></div>
                                    <div className="item-menu mt-2">
                                        <Link to={'/creator/setting'}><Icon icon="ic:baseline-person-outline" width={14} height={14} /> Profile settings</Link>
                                    </div>
                                    <div className="sep mt-2"></div>
                                    <div className="item-menu active mt-2">
                                        <Link to={'/creator/setting/social'}><Icon icon="mdi:instagram" width={14} height={14} /> Social Media</Link>
                                    </div>
                                    <div className="sep mt-2"></div>
                                    <div className="item-menu mt-2">
                                        <Link to={'/creator/setting/privacy'}><Icon icon="ic:outline-privacy-tip" width={14} height={14} /> Privacy and security</Link>
                                    </div>
                                </div>
                            </div>
                            <FooterLogged className="mt-3" />
                        </div>
                        <div className="col-md-9">
                            <div className="card-custom p-3">
                                <div className="simple">
                                    <div className="title2 text-white">SOCIAL MEDIA</div>
                                    <div className="sep mt-2"></div>
                                    {!this.state.integraded ?
                                        <div className="mt-3">
                                            <img src="/assets/img/login-insta.png" alt="Rainmakr" onClick={_ => this.init()} className="btn-insta" />
                                        </div> :
                                        <div className="integraded-ok mt-3">
                                            <div className="status d-flex align-items-center">
                                                <div className="img mr-2">
                                                    <img src="/assets/img/icon-insta-integraded.png" alt="Rainmakr" />
                                                </div>
                                                <div className="infos">
                                                    <div className="a text-white">Instagram</div>
                                                    <div className="b">
                                                        <span className="l text-steelo-l2 mr-2">STATUS:</span>
                                                        <span className="r text-green">ACTIVE</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="title2 text-white mt-3">VALUES</div>
                                            <div className="description text-steelo-l2 mt-2">This data is important for our search and fit engine. If the fields stay empty, the prices suggested by Rain will appear instead.</div>
                                            <form onSubmit={e => { e.preventDefault(); this.submit() }} className="mt-3">
                                                <div className="form-row">
                                                    <div className="col-md-3">
                                                        <label className="text-steelo-l2">STORIES PRICE</label>
                                                        <input type="text" className="form-control with-label2" value={this.state.storiesPrice} onChange={(e) => this.setState({ storiesPrice: e.target.value })} placeholder="STORIES PRICE" />
                                                    </div>
                                                </div>
                                                <div className="form-row mt-2">
                                                    <div className="col-md-3">
                                                        <label className="text-steelo-l2">REELS PRICE</label>
                                                        <input type="text" className="form-control with-label2" value={this.state.reelsPrice} onChange={(e) => this.setState({ reelsPrice: e.target.value })} placeholder="REELS PRICE" />
                                                    </div>
                                                </div>
                                                <div className="form-row mt-2">
                                                    <div className="col-md-3">
                                                        <label className="text-steelo-l2">FEED PRICE</label>
                                                        <input type="text" className="form-control with-label2" value={this.state.feedPrice} onChange={(e) => this.setState({ feedPrice: e.target.value })} placeholder="FEED PRICE" />
                                                    </div>
                                                </div>
                                                <div className="form-row mt-3">
                                                    <div className="col-md-3">
                                                        <label class="custom-checkbox">
                                                            <input type="checkbox" checked={this.state.consult} onChange={e => this.setState({ consult: e.target.checked })} />
                                                            <span class="checkmark"></span>
                                                            <span className="text-white">Under consultant</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <Link to={'/creator/profile'} className="btn btn-no">Cancel</Link>
                                                    <button type="submit" className="btn btn-submit with-shadow">Save</button>
                                                </div>
                                            </form>
                                        </div>
                                    }
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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(CreatorSettingSocial))