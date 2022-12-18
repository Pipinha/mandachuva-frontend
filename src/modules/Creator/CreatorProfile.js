import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class CreatorProfile extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'creator-profile'
        })

        this.state = {

        }
    }
    submit() {

    }

    render() {
        return (
            <>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card-custom">
                                <div className="profile pb-3">
                                    <div className="photo">
                                        <img src="/assets/img/bg-profile-card.png" alt="Rainmakr" className="img-fluid" />
                                        <img src="/assets/img/user-creator.png" alt="Rainmakr" className="main" />
                                    </div>
                                    <div className="name text-white text-center">ARIEL CHRISTINE</div>
                                    <div className="followers text-blueberry text-center mt-1">9300 Followers</div>
                                    <div className="category text-blueberry text-center mt-1">LIFESTYLE, FASHION</div>
                                    <div className="category2 text-steelo-l2 text-center mt-1">E-COMMERCE - BUENOS AIRES</div>
                                    <div className="px-3 mt-3"><div className="sep"></div></div>
                                    <div className="scores mt-3 px-3">
                                        <div className="scores-item d-flex justify-content-between">
                                            <div className="a text-white">Profile Hits</div>
                                            <div className="b text-white">1570</div>
                                        </div>
                                        <div className="scores-item d-flex justify-content-between">
                                            <div className="a text-white">Companies Following</div>
                                            <div className="b text-white">85</div>
                                        </div>
                                        <div className="scores-item d-flex justify-content-between">
                                            <div className="a text-white">Creators Following</div>
                                            <div className="b text-white">17</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">

                        </div>
                        <div className="col-md-3">

                        </div>
                    </div>
                </div>
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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(CreatorProfile))