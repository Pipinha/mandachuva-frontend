import { Icon } from "@iconify/react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class CreatorBrandView extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'creator-brand-view'
        })

        this.state = {
            jobs: [
                {},
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
                                    <Link to={'#a'} className="a active">ACTIVE JOBS</Link>
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
                                        <img src="/assets/img/logo-mercadolivre.png" alt="Rainmakr" className="main" />
                                        <div className="fit-box">
                                            <div className="fit-box-in d-flex flex-column align-items-center justify-content-center">
                                                <div className="fit-box-title text-white">FIT</div>
                                                <div className="fit-box-perc text-white">80%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="name text-white text-center mt-4">MERCADO LIVRE</div>
                                    <div className="country-state2 text-center text-steelo-l2 mt-3">LOS ANGELES, CA</div>
                                    <div className="segment text-blueberry text-center mt-2">E-COMMERCE</div>
                                    <div className="scores2 mt-4">
                                        <div className="scores-item d-flex justify-content-between py-2">
                                            <div className="a text-white">Active Jobs</div>
                                            <div className="b text-white">3</div>
                                        </div>
                                        <div className="scores-item d-flex justify-content-between py-2">
                                            <div className="a text-white">Finished Jobs</div>
                                            <div className="b text-white">19</div>
                                        </div>
                                        <div className="scores-item d-flex justify-content-between py-2">
                                            <div className="a text-white">Rating</div>
                                            <div className="b text-white">
                                                <Icon icon="material-symbols:star-rate-rounded" width={20} height={20} className="text-steelo-l2" />
                                                <Icon icon="material-symbols:star-rate-rounded" width={20} height={20} className="text-steelo-l2" />
                                                <Icon icon="material-symbols:star-rate-rounded" width={20} height={20} className="text-steelo-l2" />
                                                <Icon icon="material-symbols:star-rate-half-rounded" width={20} height={20} className="text-steelo-l2" />
                                                <Icon icon="material-symbols:star-outline-rounded" width={20} height={20} className="text-steelo-l2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="links mt-4">
                                        <a href="#a" className="item btn btn-block btn-a">Contact</a>
                                        <a href="#a" className="item btn btn-block btn-b active">Follow</a>
                                        <a href="#a" className="item btn btn-block btn-b">Website</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="row list-job">
                                {this.state.jobs.map((a, ia) => (
                                    <div className="col-md-4 mt-3" key={'yourfit-' + ia}>
                                        <div className="card-custom">
                                            <div className="list-job-item p-3">
                                                <div className="names-fit d-flex justify-content-between pb-2 mt-2">
                                                    <div className="names">
                                                        <div className="d-flex align-items-center">
                                                            <div className="logo mr-2"><img src="/assets/img/logo-nike.png" alt="Rainmakr" /></div>
                                                            <div className="txt">
                                                                <div className="a text-steelo-l2">NESPRESSO</div>
                                                                <div className="b text-white">COFFEE TIME</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="fit">
                                                        <div className="a text-steelo-l2 text-right">FIT</div>
                                                        <div className="b text-white text-right">80%</div>
                                                    </div>
                                                </div>
                                                <div className="infos mt-2">
                                                    <span className="a text-white mr-1">Start:</span><span className="b text-white">July 25th</span><br />
                                                    <span className="a text-white mr-1">Delivery:</span><span className="b text-white">August 6th</span><br />
                                                    <span className="a text-white mr-1">Budget:</span><span className="b text-white">$40-$300</span>
                                                </div>
                                                <div className="segment text-blueberry pb-3 mt-1">LIFESTYLE</div>
                                                <div className="plataform-action d-flex justify-content-between align-items-end mt-3">
                                                    <div className="plataform">
                                                        <div className="plataform-caption text-steelo-l2">PLATFORM</div>
                                                        <div className="plataform-icons text-white mt-1">
                                                            <Icon icon="bi:instagram" width={24} height={24} />
                                                        </div>
                                                    </div>
                                                    <div className="action">
                                                        <Link to={'/creator/rainjobs/3'} className="btn btn-submit with-shadow btn-sm">More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix mt-6"></div>
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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(CreatorBrandView))