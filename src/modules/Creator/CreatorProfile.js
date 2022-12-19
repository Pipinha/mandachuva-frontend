import { Icon } from "@iconify/react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Swal from "sweetalert2";

class CreatorProfile extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'creator-profile'
        })

        this.state = {
            rainlink: 'https://rainlinks.com/ariel',
            jobs: [
                {
                    name: 'MERCADO LIVRE',
                    description: 'READY TO POST',
                    icon: '/assets/img/icon-wait.png',
                    message: true,
                    open: false,
                },
                {
                    name: 'MERCADO LIVRE',
                    description: 'READY TO POST',
                    icon: '/assets/img/ico-danger.png',
                    message: false,
                    open: true,
                }
            ]
        }
    }
    submit() {

    }

    async copyRainlink() {
        await navigator.clipboard.writeText(this.state.rainlink);
        Swal.fire('Success!', 'Rainlink copied success!')
    }

    render() {
        return (
            <>
                <div className="container mt-4">
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
                                <div className="simple p-3">
                                    <div className="title text-steelo-l2">SHARE YOUR RAINLINKS</div>
                                    <div className="link mt-3 bg-steelo-m1 d-flex align-items-center">{this.state.rainlink}</div>
                                    <div className="copy text-right mt-3">
                                        <span className="text-blueberry" onClick={_ => this.copyRainlink()}>Copy</span>
                                    </div>
                                </div>
                            </div>

                            <div className="card-custom mt-4">
                                <div className="simple p-3">
                                    <div className="title text-steelo-l2">COMMUNITY</div>
                                    <div className="txt text-white mt-3">Access our discord and make contact with other creators to exchange experiences and partnerships.</div>
                                    <div className="copy text-right mt-3">
                                        <span onClick={_ => window.open('https://discord.com', '_blank')} className="text-blueberry">Go to Discord</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card-custom">
                                <div className="timeline-profile p-3">
                                    <div className="title text-steelo-l2">GROWTH YOUR FIT WITH BRANDS</div>
                                    <div className="timeline mt-3 d-flex justify-content-between align-items-center">
                                        <div className="timeline-point">
                                            <div className="bal">&nbsp;</div>
                                            <div className="description text-white">Validate Your<br />Account</div>
                                        </div>
                                        <div className="timeline-bar"></div>
                                        <div className="timeline-point">
                                            <div className="bal">&nbsp;</div>
                                            <div className="description text-white">Complete<br />You Bio</div>
                                        </div>
                                        <div className="timeline-bar"></div>
                                        <div className="timeline-point">
                                            <div className="bal">&nbsp;</div>
                                            <div className="description text-white">Complete<br />Your Niches</div>
                                        </div>
                                        <div className="timeline-bar"></div>
                                        <div className="timeline-point active">
                                            <div className="bal">&nbsp;</div>
                                            <div className="description text-white">Start<br />Selling</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="jobs-options d-flex justify-content-between mt-4">
                                <div className="menu">
                                    <Link to={'/creator/profile'} className="active">ACTIVE</Link>
                                    <Link to={'/creator/profile'}>FAVORITES</Link>
                                </div>
                                <div className="sort text-steelo-l2">
                                    ORDER BY <Icon icon="material-symbols:arrow-drop-down" width={24} height={24} />
                                </div>
                            </div>
                            <div className="jobs-list mt-2">
                                {this.state.jobs.map((a, ia) => (
                                    <div className={'item' + (ia > 0 ? ' mt-3' : '')} key={ia}>
                                        <div className="card-custom">
                                            <div className="item-main d-flex align-items-center">
                                                <div className="company flex-fill">
                                                    <div className="name text-white">{a.name}</div>
                                                    <div className="description text-steelo-l2">{a.description}</div>
                                                </div>
                                                <div className="status text-white flex-fill">
                                                    <img src={a.icon} alt="Rainkmakr" className="mr-2" />Waiting Report
                                                </div>
                                                <div className="link flex-fill d-flex justify-content-end align-items-center">
                                                    <div className={'msg' + (a.message ? ' new text-gray-20' : ' text-steelo-m2')}>
                                                        <Icon icon="material-symbols:chat-rounded" width={24} height={24} />
                                                    </div>
                                                    <Link to={'/creator/profile'} className="text-blueberry">More</Link>
                                                </div>
                                                <div className={'btn-show-hide text-center' + (a.open ? ' open' : '')}><Icon icon={'material-symbols:arrow-drop-' + (!a.open ? 'up' : 'down') + '-rounded'} width={24} height={24} /></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-3">

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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(CreatorProfile))