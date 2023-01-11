import { Icon } from "@iconify/react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import history from "../../routes/history";

class CompanySearch extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'company-search'
        })

        this.state = {
            jobs: [
                {},
                {},
                {},
                {},
                {}
            ],
            creators: [
                {},
                {},
                {}
            ],
            brands: [
                {},
                {},
                {}
            ]
        }
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
                                    <Link to={'/company/search'} className="txt active mr-4">SEARCH</Link>
                                    <Link to={'/company/rainjobs'} className="txt mr-4">RAINJOBS</Link>
                                    <Link to={'/company/brand'} className="txt mr-4">BRANDS</Link>
                                    <Link to={'/company/creators'} className="txt mr-4">CREATORS</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="caption-sort d-flex justify-content-between align-items-center pb-2">
                                <div className="caption text-white">RAINJOBS</div>
                                <div className="sort text-steelo-l2 cursor-pointer" onClick={_=>history.push('/company/rainjobs')}>See more RainJobs</div>
                            </div>
                            <div className="row list-job">
                                {this.state.jobs.map((a, ia) => (
                                    <div className="col-md-4 mt-3" key={'jobs-' + ia}>
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
                                                        <Link to={'/company/rainjobs/3'} className="btn btn-submit with-shadow btn-sm">More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-12 mt-4">
                            <div className="caption-sort d-flex justify-content-between align-items-center pb-2">
                                <div className="caption text-white">CREATORS</div>
                                <div className="sort text-steelo-l2 cursor-pointer">See more creators</div>
                            </div>
                            <div className="row list-job">
                                {this.state.creators.map((a, ia) => (
                                    <div className="col-md-4 mt-3" key={'creators-' + ia}>
                                        <div className="card-custom">
                                            <div className="list-a-item p-3">
                                                <div className="d-flex align-items-center">
                                                    <div className="img mr-2">
                                                        <img src="/assets/img/user-creator.png" alt="Rainmakr" />
                                                    </div>
                                                    <div className="names flex-fill">
                                                        <div className="a text-white">MITHI</div>
                                                        <div className="b text-steelo-l2">LOS ANGELES</div>
                                                        <div className="c text-blueberry mt-1">LIFESTYLE</div>
                                                    </div>
                                                    <div className="fit-info">
                                                        <div className="a text-steelo-l2">FIT</div>
                                                        <div className="b text-white mt-1">80%</div>
                                                        <div className="c text-blueberry mt-1" onClick={_=>this.showView(3)}>PROFILE</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-12 mt-4">
                            <div className="caption-sort d-flex justify-content-between align-items-center pb-2">
                                <div className="caption text-white">BRANDS</div>
                                <div className="sort text-steelo-l2 cursor-pointer">See more brands</div>
                            </div>
                            <div className="row list-job">
                                {this.state.brands.map((a, ia) => (
                                    <div className="col-md-4 mt-3" key={'brands-' + ia}>
                                        <div className="card-custom">
                                            <div className="list-a-item p-3">
                                                <div className="d-flex align-items-center">
                                                    <div className="img mr-2">
                                                        <img src="/assets/img/logo-nescafe.png" alt="Rainmakr" />
                                                    </div>
                                                    <div className="names flex-fill">
                                                        <div className="a text-white">MERCADO LIVRE</div>
                                                        <div className="b text-steelo-l2">BUENOS AIRES</div>
                                                        <div className="c text-blueberry mt-2">E-COMMERCE</div>
                                                    </div>
                                                    <div className="fit-info">
                                                        <div className="a text-steelo-l2">FIT</div>
                                                        <div className="b text-white">80%</div>
                                                        <div className="c text-blueberry mt-2" onClick={_=>this.showView(3)}>PROFILE</div>
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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(CompanySearch))