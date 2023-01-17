import { Icon } from "@iconify/react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class CompanyOrderView extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'company-order-view'
        })

        this.state = {
            confirm: false,
        }
    }
    render() {
        return (
            <>
                <div className="title2">
                    <img src="/assets/img/bg-profile-view.png" alt="Rainmakr" className="bg" />
                    <div className="infos">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-9">
                                    <Link to={'/company/order/3'} className="a">ARIEL CHRISTINE {'>'} MORNING ROUTINE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container wrap">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card-custom bg-profile2 mt-4">
                                <div className="profile p-4">
                                    <div className="photo">
                                        <img src="/assets/img/user-creator.png" alt="Rainmakr" className="main" />
                                    </div>
                                    <div className="name text-white text-center mt-4">ARIEL CHRISTINE</div>
                                    <div className="country-state2 text-center text-steelo-l2 mt-3">LOS ANGELES, CA</div>
                                    <div className="segment text-blueberry text-center mt-2">LIFESTYLE, FASHION</div>
                                    <div className="scores2 mt-4">
                                        <div className="scores-item d-flex justify-content-between py-2">
                                            <div className="a text-white">Engagement</div>
                                            <div className="b text-white">75%</div>
                                        </div>
                                        <div className="scores-item d-flex justify-content-between py-2">
                                            <div className="a text-white">Credibility</div>
                                            <div className="b text-white">93%</div>
                                        </div>
                                        <div className="scores-item d-flex justify-content-between py-2">
                                            <div className="a text-white">Followers</div>
                                            <div className="b text-white">9.375</div>
                                        </div>
                                        <div className="scores-item d-flex justify-content-between py-2">
                                            <div className="a text-white">Likes</div>
                                            <div className="b text-white">101.380</div>
                                        </div>
                                    </div>
                                    <div className="social-links text-center mt-4">
                                        <a href="https://instagram.com" className="text-white"><Icon icon="bi:instagram" width={32} height={32} /></a>
                                        <a href="https://instagram.com" className="text-white"><Icon icon="bi:tiktok" width={32} height={32} /></a>
                                        <a href="https://instagram.com" className="text-white"><Icon icon="bi:snapchat" width={32} height={32} /></a>
                                    </div>
                                    <div className="links mt-4">
                                        <a href="#a" className="item btn btn-block btn-a">Direct book me</a>
                                        <a href="#a" className="item btn btn-block btn-b active">Follow</a>
                                        <a href="#a" className="item btn btn-block btn-b">My store</a>
                                        <a href="#a" className="item btn btn-block btn-b">My podcast</a>
                                        <a href="#a" className="item btn btn-block btn-b">Wish list</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 list-job">
                            <div className="back-to d-flex justify-content-between mt-1">
                                <Link to={'/company/profile'} className="text-blueberry d-flex align-items-center"><Icon icon="material-symbols:arrow-back-ios-new-rounded" width={12} height={12} className="mr-1" /> Back to dashboard</Link>
                                <Link to={'#a'} className="text-blueberry d-flex align-items-center">Ready to post details <Icon icon="material-symbols:info" width={24} height={24} className="ml-1" /></Link>
                            </div>

                            <div className="progress-stage mt-3">
                                <div className="in">
                                    <div className="tit d-flex justify-content-between align-items-center">
                                        <div className="a">PROGRESS</div>
                                        <div className="a">STAGE 2 OF 6</div>
                                    </div>
                                    <div className="timeline d-flex align-items-center">
                                        <div className="point active ok">
                                            <div className="circle"></div>
                                            <div className="desc">
                                                <div className="a">1. Purchase</div>
                                                <div className="b">03/10/2022</div>
                                            </div>
                                        </div>
                                        <div className="bar ok flex-fill"></div>
                                        <div className="point active">
                                            <div className="circle"></div>
                                            <div className="desc">
                                                <div className="a">2. Briefing</div>
                                                <div className="b">WAITING</div>
                                            </div>
                                        </div>
                                        <div className="bar flex-fill"></div>
                                        <div className="point">
                                            <div className="circle"></div>
                                            <div className="desc">
                                                <div className="a">3. Creation</div>
                                                <div className="b">WAITING</div>
                                            </div>
                                        </div>
                                        <div className="bar flex-fill"></div>
                                        <div className="point">
                                            <div className="circle"></div>
                                            <div className="desc">
                                                <div className="a">2. Briefing</div>
                                                <div className="b">WAITING</div>
                                            </div>
                                        </div>
                                        <div className="bar flex-fill"></div>
                                        <div className="point">
                                            <div className="circle"></div>
                                            <div className="desc">
                                                <div className="a">2. Briefing</div>
                                                <div className="b">WAITING</div>
                                            </div>
                                        </div>
                                        <div className="bar flex-fill"></div>
                                        <div className="point">
                                            <div className="circle"></div>
                                            <div className="desc">
                                                <div className="a">2. Briefing</div>
                                                <div className="b">WAITING</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stage">
                                    <div className="step1 d-flex align-items-center">
                                        <div className="stage-tit">
                                            <div className="a">SET UP THE DELIVERY</div>
                                            <div className="b mt-2">Talk to the creator to set up what needs to be done. When the both sides are ok, go to the next step. </div>
                                        </div>
                                        <div className="dates d-flex justify-content-around ml-3">
                                            <div>
                                                <label className="text-steelo-l2">LAST POST DELIVERY</label>
                                                <input type="text" className="form-control with-label3" placeholder="AAAA-MM-YYYY" />
                                            </div>
                                            <div className="ml-3">
                                                <label className="text-steelo-l2">LAST PUBLICATION</label>
                                                <input type="text" className="form-control with-label3" placeholder="AAAA-MM-YYYY" />
                                            </div>
                                        </div>
                                        <div className="opts flex-fill px-3">
                                            <div className="chk">
                                                <label class="custom-checkbox">
                                                    <input type="checkbox" checked={this.state.confirm} onChange={e => this.setState({ confirm: e.target.checked })} />
                                                    <span class="checkmark"></span>
                                                    <span className="text-white">I confirm the dates</span>
                                                </label>
                                            </div>
                                            <div className="btns">
                                                <button type="button" className="btn btn-block btn-a with-shadow">Go to creation</button>
                                            </div>
                                        </div>
                                    </div>
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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(CompanyOrderView))