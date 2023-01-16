import { Icon } from "@iconify/react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import history from "../../../routes/history";

class CompanyCreatorView extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'company-creator-view'
        })

        this.state = {
            jobs: [
                {},
                {},
                {},
            ]
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
                                    <Link to={'/company/creator/3'} className="a active">READY TO POST</Link>
                                    <Link to={'#a'} className="a ml-3">MY INSTAGRAM</Link>
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
                            {this.state.jobs.map((_, ai) => (
                                <div className="posts-item" key={'list-job-' + ai}>
                                    <div className="in d-flex">
                                        <div className="img">
                                            <img src="/assets/img/img-post.png" alt="Raimakr" />
                                        </div>
                                        <div className="infos flex-fill ml-3">
                                            <div className="titles d-flex justify-content-between align-items-center pb-2">
                                                <div className="a text-white">MORNING ROUTINE</div>
                                                <div>
                                                    <a href="https://instagram.com" className="text-white"><Icon icon="bi:instagram" width={24} height={24} /></a>
                                                </div>
                                            </div>
                                            <div className="prices-option d-flex justify-content-between">
                                                <div className="prices">
                                                    <div className="desc text-steelo-l2 mt-1">POTENTIAL REACH: 10K</div>
                                                    <div className="list-price mt-2">
                                                        <div className="list-price-item d-flex align-items-center">
                                                            <div className="a">Stories:</div>
                                                            <div className="b flex-fill">$1.000</div>
                                                            <div className="c">
                                                                <select className="form-control">
                                                                    <option value="">0</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="list-price-item d-flex align-items-center">
                                                            <div className="a">Reels:</div>
                                                            <div className="b flex-fill">$1.000</div>
                                                            <div className="c">
                                                                <select className="form-control">
                                                                    <option value="">0</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="list-price-item d-flex align-items-center">
                                                            <div className="a">Feed:</div>
                                                            <div className="b flex-fill">$1.000</div>
                                                            <div className="c">
                                                                <select className="form-control">
                                                                    <option value="">0</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="option mt-2">
                                                    <div className="total">
                                                        <div className="a">TOTAL</div>
                                                        <div className="b">$0</div>
                                                    </div>
                                                    <div className="btns mt-6">
                                                        <button type="button" className="btn btn-a" onClick={_ => history.push('/company/creator/post-step1/3')}>Buy it</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(CompanyCreatorView))