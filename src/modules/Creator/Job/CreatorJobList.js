import { Icon } from "@iconify/react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import FooterLogged from "../../../components/FooterLogged";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

class CreatorJobList extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'creator-job'
        })

        this.state = {
            yourFit: [
                {},
                {},
                {},
                {},
                {}
            ],
            lastest: [
                {},
                {},
                {},
            ],
            fits: [],
            segments: [],
            plataforms: [],
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
                                    <Link to={'/creator/search'} className="txt mr-4">SEARCH</Link>
                                    <Link to={'/creator/rainjobs'} className="txt active mr-4">RAINJOBS</Link>
                                    <Link to={'/creator/brand'} className="txt mr-4">BRANDS</Link>
                                    <Link to={'/creator/list'} className="txt mr-4">CREATORS</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="caption-sort d-flex justify-content-between align-items-center pb-2">
                                <div className="caption text-white">YOUR FIT</div>
                                <div className="sort text-steelo-l2">
                                    ORDER BY <Icon icon="material-symbols:arrow-drop-down" width={24} height={24} />
                                </div>
                            </div>
                            <div className="row list-job">
                                {this.state.yourFit.map((a, ia) => (
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
                            <div className="caption-sort d-flex justify-content-between align-items-center pb-2 mt-4">
                                <div className="caption text-white">LASTESTS JOBS</div>
                            </div>
                            <div className="row list-job">
                                {this.state.lastest.map((a, ia) => (
                                    <div className="col-md-4 mt-3" key={'lastests-' + ia}>
                                        <div className="card-custom">
                                            <div className="list-job-item p-3">
                                                <div className="names-fit d-flex justify-content-between pb-2">
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
                        <div className="col-md-3">
                            <div className="card-custom">
                                <div className="filter-job p-3">
                                    <form onSubmit={e => { e.preventDefault(); }}>
                                        <div className="tit text-white">FILTERS</div>
                                        <div className="mt-2">
                                            <label className="text-steelo-l2">FIT</label>
                                            <Typeahead
                                                id="fits"
                                                labelKey="description"
                                                multiple
                                                onChange={(e) => this.setState({ fits: e })}
                                                options={[
                                                    {
                                                        id: 1,
                                                        description: '0% <= 20%'
                                                    },
                                                    {
                                                        id: 2,
                                                        description: '21% >= 40%'
                                                    }
                                                ]}
                                                placeholder="Any"
                                                selected={this.state.fits}
                                            />
                                        </div>
                                        <div className="mt-2">
                                            <label className="text-steelo-l2">SEGMENT</label>
                                            <Typeahead
                                                id="segments"
                                                labelKey="description"
                                                multiple
                                                onChange={(e) => this.setState({ segments: e })}
                                                options={[
                                                    {
                                                        id: 1,
                                                        description: 'Lifestyle'
                                                    }
                                                ]}
                                                placeholder="All"
                                                selected={this.state.segments}
                                            />
                                        </div>
                                        <div className="mt-2">
                                            <label className="text-steelo-l2">PLATAFORM</label>
                                            <Typeahead
                                                id="plataforms"
                                                labelKey="description"
                                                multiple
                                                onChange={(e) => this.setState({ plataforms: e })}
                                                options={[
                                                    {
                                                        id: 1,
                                                        description: 'Instagram'
                                                    },
                                                    {
                                                        id: 2,
                                                        description: 'Tiktok'
                                                    }
                                                ]}
                                                placeholder="All"
                                                selected={this.state.plataforms}
                                            />
                                        </div>
                                        <div className="trace-a mt-3"></div>
                                        <div className="tit text-white mt-3">EXIBITION</div>
                                        <div className="mt-3 d-flex align-items-center">
                                            <label className="custom-switch mr-2">
                                                <input type="checkbox" />
                                                <span className="slider round"></span>
                                            </label>
                                            <div className="checkbox text-white">Blockers: <span className="text-bold">ON</span></div>
                                        </div>
                                        <div className="mt-3 d-flex align-items-center">
                                            <label className="custom-switch mr-2">
                                                <input type="checkbox" />
                                                <span className="slider round"></span>
                                            </label>
                                            <div className="checkbox text-white">Show ended jobs: <span className="text-bold">ON</span></div>
                                        </div>
                                        <div className="mt-4">
                                            <button type="button" className="btn btn-b btn-block">Refine the Result</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <FooterLogged className="mt-4" />
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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(CreatorJobList))