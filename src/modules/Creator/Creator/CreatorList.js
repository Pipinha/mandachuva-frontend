import { Icon } from "@iconify/react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import FooterLogged from "../../../components/FooterLogged";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

class CreatorList extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'creator-list'
        })

        this.state = {
            brands: [
                {},
                {},
                {},
                {},
                {}
            ],
            fits: [],
            segments: [],
        }
    }
    showView(id) {
        this.props.history.push('/creator/view/' + id)
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
                                    <Link to={'/creator/rainjobs'} className="txt mr-4">RAINJOBS</Link>
                                    <Link to={'/creator/brand'} className="txt mr-4">BRANDS</Link>
                                    <Link to={'/creator/list'} className="txt active mr-4">CREATORS</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="caption-sort d-flex justify-content-between align-items-center pb-2">
                                <div className="caption text-white">CREATORS</div>
                                <div className="sort text-steelo-l2">
                                    ORDER BY <Icon icon="material-symbols:arrow-drop-down" width={24} height={24} />
                                </div>
                            </div>
                            <div className="row list-job">
                                {this.state.brands.map((a, ia) => (
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
                                                        <div className="c text-blueberry mt-1" onClick={_ => this.showView(3)}>PROFILE</div>
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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(CreatorList))