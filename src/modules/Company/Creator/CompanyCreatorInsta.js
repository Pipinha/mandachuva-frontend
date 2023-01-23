import { Icon } from "@iconify/react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class CompanyCreatorInsta extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'company-creator-insta'
        })

        this.state = {
            posts: [{}, {}, {}, {}, {}, {}]
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
                                    <Link to={'/company/creator/3'} className="a">READY TO POST</Link>
                                    <Link to={'/company/creator/insta/3'} className="a active ml-3">MY INSTAGRAM</Link>
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
                        <div className="col-md-9 list-job pt-3">
                            <div className="row">
                                {this.state.posts.map(_ => (
                                    <div className="col-md-4 insta-item mb-4">
                                        <div className="insta-item-in">
                                            <div className="img">
                                                <img src="/assets/img/img-insta.png" alt="Rainmakr" className="img-fluid" />
                                            </div>
                                            <div className="option d-flex justify-content-center p-3">
                                                <div className="option-item">
                                                    <Icon icon="ic:outline-remove-red-eye" width={32} height={32} /><br />
                                                    100
                                                </div>
                                                <div className="option-item ml-3">
                                                    <Icon icon="mdi:cards-heart-outline" width={32} height={32} /><br />
                                                    100
                                                </div>
                                                <div className="option-item ml-3">
                                                    <Icon icon="mdi:cards-heart-outline" width={32} height={32} /><br />
                                                    100
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(CompanyCreatorInsta))