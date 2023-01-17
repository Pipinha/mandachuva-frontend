import { Icon } from "@iconify/react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class CompanyCreatorPostStep1 extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'company-creator-post-step'
        })
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
                                    <Link to={'/company/creator/3'} className="a">READY TO POST {'>'} REVIEW</Link>
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
                                        <div className="fit-box">
                                            <div className="fit-box-in d-flex flex-column align-items-center justify-content-center">
                                                <div className="fit-box-title text-white">FIT</div>
                                                <div className="fit-box-perc text-white">80%</div>
                                            </div>
                                        </div>
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
                            <div className="back-to mt-1">
                                <Link to={'/company/creator/3'} className="text-blueberry d-flex align-items-center"><Icon icon="material-symbols:arrow-back-ios-new-rounded" width={12} height={12} className="mr-1" /> Back to ready to post</Link>
                            </div>
                            <div className="progress-post d-flex align-items-center pt-3">
                                <div className="point active">
                                    <div className="circle"></div>
                                    <div className="desc">Review</div>
                                </div>
                                <div className="step flex-fill"></div>
                                <div className="point">
                                    <div className="circle"></div>
                                    <div className="desc">Payment</div>
                                </div>
                                <div className="step flex-fill"></div>
                                <div className="point">
                                    <div className="circle"></div>
                                    <div className="desc">Finish</div>
                                </div>
                            </div>
                            <div className="posts-item mt-5">
                                <div className="in d-flex">
                                    <div className="img">
                                        <img src="/assets/img/img-post.png" className="img-fluid" alt="Raimakr" />
                                    </div>
                                    <div className="infos flex-fill ml-3">
                                        <div className="titles d-flex justify-content-between align-items-center pb-2">
                                            <div className="a text-white">MORNING ROUTINE</div>
                                            <div className="a text-white">TOTAL: $6.000</div>
                                        </div>
                                        <div className="review d-flex mt-3">
                                            <div className="resume">
                                                Stories: 3 Posts<br/>
                                                Reels: 1 Post<br/>
                                                Feed: 1 Post
                                            </div>
                                            <div className="hashs">
                                                <textarea className="form-control" placeholder="#hashtags"></textarea>
                                            </div>
                                            <div className="captions ml-2">
                                                <textarea className="form-control" placeholder="@username"></textarea>
                                            </div>
                                            <div className="briefing ml-2">
                                                <textarea className="form-control" placeholder="Briefing"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="btns text-right">
                                <Link to={'/company/creator/post-step2/3'} className="btn btn-a">Continue to Payment</Link>
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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(CompanyCreatorPostStep1))