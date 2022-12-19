import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Icon } from "@iconify/react";

class CreatorPostList extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'creator-post-list'
        })

        this.state = {
        }
    }
    render() {
        return (
            <>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card-custom bg-profile2">
                                <div className="profile pb-4">
                                    <div className="photo">
                                        <img src="/assets/img/bg-profile-card.png" alt="Rainmakr" className="img-fluid" />
                                        <img src="/assets/img/user-creator.png" alt="Rainmakr" className="main" />
                                    </div>
                                    <div className="name text-white text-center">ARIEL CHRISTINE</div>
                                    <div className="country-state text-center text-gray-40 mt-2">LOS ANGELES, CA</div>
                                    <div className="segment text-blueberry text-center mt-2">LIFESTYLE, FASHION</div>
                                    <div className="scores2 mt-3 px-4">
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
                                    <div className="social-links text-center mt-3">
                                        <a href="https://instagram.com" className="text-white"><Icon icon="bi:instagram" width={24} height={24} /></a>
                                        <a href="https://instagram.com" className="text-white"><Icon icon="bi:tiktok" width={24} height={24} /></a>
                                        <a href="https://instagram.com" className="text-white"><Icon icon="bi:snapchat" width={24} height={24} /></a>
                                    </div>
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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(CreatorPostList))