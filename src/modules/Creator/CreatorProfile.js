import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";

class CreatorProfile extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'creator-profile'
        })

        this.state = {
            rainlink: 'https://rainlinks.com/ariel'
        }
    }
    submit() {

    }

    async copyRainlink() {
        await navigator.clipboard.writeText(this.state.rainlink);
        Swal.fire('Success!','Rainlink copied success!')
    }

    render() {
        return (
            <>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card-custom">
                                <div className="profile pb-4">
                                    <div className="photo">
                                        <img src="/assets/img/bg-profile-card.png" alt="Rainmakr" className="img-fluid" />
                                        <img src="/assets/img/user-creator.png" alt="Rainmakr" className="main" />
                                    </div>
                                    <div className="name text-white text-center">ARIEL CHRISTINE</div>
                                    <div className="followers text-blueberry text-center mt-1">9300 Followers</div>
                                    <div className="category text-blueberry text-center mt-1">LIFESTYLE, FASHION</div>
                                    <div className="category2 text-steelo-l2 text-center mt-1">E-COMMERCE - BUENOS AIRES</div>
                                    <div className="px-4 mt-3"><div className="sep"></div></div>
                                    <div className="scores mt-3 px-4">
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
                            <div className="card-custom mt-4">
                                <div className="rainlinks p-3">
                                    <div className="title text-steelo-l2">SHARE YOUR RAINLINKS</div>
                                    <div className="link mt-3 bg-steelo-m1 d-flex align-items-center">{this.state.rainlink}</div>
                                    <div className="copy text-right mt-3">
                                        <span className="text-blueberry" onClick={_=>this.copyRainlink()}>Copy</span>
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