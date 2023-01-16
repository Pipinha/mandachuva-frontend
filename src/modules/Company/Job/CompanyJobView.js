import { Icon } from "@iconify/react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Swal from "sweetalert2";

class CompanyJobView extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'company-job-view'
        })

        this.state = {
            fitCompanies: [
                {
                    logo: '/assets/img/logo-nescafe.png',
                    name: 'Coffee Time',
                    brand: 'NESPRESSO',
                    fit: '80%',
                },
                {
                    logo: '/assets/img/logo-absolut.png',
                    name: 'Party Hard',
                    brand: 'ABSOLUT',
                    fit: '78%',
                },
                {
                    logo: '/assets/img/logo-sephora.png',
                    name: 'Summer Posts',
                    brand: 'SEPHORA',
                    fit: '76%',
                },
                {
                    logo: '/assets/img/logo-nike.png',
                    name: 'Active Lifestyle',
                    brand: 'NIKE',
                    fit: '74%',
                },
                {
                    logo: '/assets/img/logo-skillshare.png',
                    name: 'Keep Learning',
                    brand: 'SKILLSHARE',
                    fit: '72%',
                }
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
                                    <Link to={'#a'} className="txt active mr-4">RAINJOBS &gt; COFFEE TIME</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-4">
                    <div className="back-to mt-3">
                        <Link to={'/company/profile'} className="text-blueberry d-flex align-items-center"><Icon icon="material-symbols:arrow-back-ios-new-rounded" width={12} height={12} className="mr-1" /> Back to Dashboard</Link>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-9">
                            <div className="card-custom">
                                <div className="view p-3">
                                    <div className="h d-flex align-items-center">
                                        <div className="logo mr-2">
                                            <img src="/assets/img/logo-nike.png" alt="Rainmakr" />
                                        </div>
                                        <div className="names">
                                            <div className="a text-steelo-l2">NESPRESSO</div>
                                            <div className="b text-white">
                                                COFFEE TIME
                                            </div>
                                        </div>
                                        <div className="back flex-fill text-right">
                                            <Link to={'/company/rainjobs'} className="btn btn-b">Back to RainJobs</Link>
                                        </div>
                                    </div>
                                    <div className="trace-a mt-3"></div>
                                    <div className="segment text-blueberry mt-3">LIFESTYLE</div>
                                    <div className="infos mt-2">
                                        <span className="a text-white mr-1">Plataform:</span><span className="b text-white">Instagram</span><br />
                                        <span className="a text-white mr-1">Followers:</span><span className="b text-white">5000+</span><br />
                                        <span className="a text-white mr-1">Gender:</span><span className="b text-white">Any</span><br />
                                        <span className="a text-white mr-1">Age:</span><span className="b text-white">Any</span><br />
                                        <span className="a text-white mr-1">Location:</span><span className="b text-white">Los Angeles</span>
                                    </div>
                                    <div className="txt-title text-steelo-l2 mt-3">INFO</div>
                                    <div className="txt text-white mt-2">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis scelerisque tellus. In ultricies risus vel eros sodales, molestie dictum libero tincidunt. Integer vel sodales tortor. Praesent laoreet faucibus sollicitudin. Ut rutrum nulla eget nisl gravida imperdiet. Nulla lacinia libero orci, vel pellentesque odio efficitur vel. Vestibulum eget consectetur ipsum. Proin placerat, justo quis faucibus sagittis, quam lectus dapibus neque, id maximus eros quam ac enim. In eu porttitor lectus.</p>
                                        <p>Donec at arcu metus. Aliquam pretium elit tincidunt, egestas quam nec, placerat nunc. Fusce orci nibh, porttitor vel semper nec, congue id justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur faucibus lectus a sapien efficitur varius vitae vitae eros.</p>
                                        <ul>
                                            <li>Curabitur nec sollicitudin diam, non varius augue. Donec vulputate maximus massa ultricies lacinia. Fusce faucibus nulla nec enim aliquet, in sodales libero iaculis.</li>
                                            <li>Integer vitae massa auctor, commodo neque vel, feugiat elit. Donec porttitor eget orci posuere convallis. Duis sit amet turpis cursus, interdum risus non, venenatis nibh.</li>
                                            <li>Quisque dictum cursus libero sed vestibulum. Etiam sit amet efficitur lacus. Quisque vel sollicitudin purus.</li>
                                        </ul>
                                        <p>Nulla congue vel sapien vel dapibus. Nullam eget felis sed purus eleifend varius nec non turpis. Sed sed ornare augue. Fusce tristique arcu in massa posuere mattis.</p>
                                    </div>
                                    <div className="infos mt-3">
                                        <span className="a text-white mr-1">Start:</span><span className="b text-white">July 25th</span><br />
                                        <span className="a text-white mr-1">Delivery:</span><span className="b text-white">August 6th</span><br />
                                        <span className="a text-white mr-1">Budget:</span><span className="b text-white">$40-$300</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card-custom">
                                <div className="simple p-3">
                                    <div className="title text-steelo-l2">OTHER RAINJOBS</div>
                                    <div className="list-fit-companies">
                                        {this.state.fitCompanies.map((a, ia) => (
                                            <div className="item d-flex align-items-center" key={'fit-' + ia}>
                                                <div className="logo mr-2">
                                                    <img src={a.logo} alt="Rainmakr" />
                                                </div>
                                                <div className="infos flex-fill">
                                                    <div className="name text-white">{a.name}</div>
                                                    <div className="brand text-steelo-l2">{a.brand}</div>
                                                </div>
                                                <div className="fit">
                                                    <div className="a text-steelo-l2">FIT</div>
                                                    <div className="b text-white">{a.fit}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="copy text-right mt-3">
                                        <span className="text-blueberry">More jobs</span>
                                    </div>
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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(CompanyJobView))