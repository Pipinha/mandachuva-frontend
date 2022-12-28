import { Icon } from "@iconify/react";
import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class CreatorRainlink extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'creator-rainlink'
        })

        this.state = {
        }
    }
    render() {
        return (
            <>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="box-central mt-6 mb-6">
                        <div className="in p-4">
                            <div className="profile">
                                <div className="photo d-flex justify-content-center">
                                    <img src="/assets/img/user-creator.png" alt="Rainmakr" className="main" />
                                </div>
                                <div className="name text-white text-center mt-2">ARIEL CHRISTINE</div>
                                <div className="country-state text-center text-steelo-l2 mt-3">LOS ANGELES, CA</div>
                                <div className="segment text-blueberry text-center mt-1">LIFESTYLE, FASHION</div>
                                <div className="social-main d-flex justify-content-center mt-4">
                                    <a href="https://instagram.com" className="text-orange-m1"><Icon icon="bi:instagram" width={48} height={48} /></a>
                                </div>
                                <div className="scores mt-4">
                                    <div className="scores-item d-flex justify-content-between py-2">
                                        <div className="a text-white">Engagement</div>
                                        <div className="b text-white">5%</div>
                                    </div>
                                    <div className="scores-item d-flex justify-content-between py-2">
                                        <div className="a text-white">Credibility</div>
                                        <div className="b text-white">93%</div>
                                    </div>
                                    <div className="scores-item d-flex justify-content-between py-2">
                                        <div className="a text-white">Followers</div>
                                        <div className="b text-white">101.380</div>
                                    </div>
                                    <div className="scores-item d-flex justify-content-between py-2">
                                        <div className="a text-white">Likes</div>
                                        <div className="b text-white">9.375</div>
                                    </div>
                                </div>
                                <div className="social-links text-center mt-5">
                                    <a href="https://instagram.com" className="text-white"><Icon icon="bi:instagram" width={32} height={32} /></a>
                                    <a href="https://instagram.com" className="text-white"><Icon icon="bi:tiktok" width={32} height={32} /></a>
                                    <a href="https://instagram.com" className="text-white"><Icon icon="bi:snapchat" width={32} height={32} /></a>
                                </div>
                                <div className="links mt-5">
                                    <a href="#a" className="item btn btn-block btn-a">Direct book me</a>
                                    <a href="#a" className="item btn btn-block btn-b active">Follow</a>
                                    <a href="#a" className="item btn btn-block btn-b">My store</a>
                                    <a href="#a" className="item btn btn-block btn-b">My podcast</a>
                                    <a href="#a" className="item btn btn-block btn-b">Wish list</a>
                                </div>
                                <div className="caption mt-5 text-center text-steelo-l2">CREATE YOUR OWN RAINLINK</div>
                                <div className="logo text-center mt-1">
                                    <img src="/assets/img/logo-rainlink.png" alt="Rainmakr" />
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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(CreatorRainlink))