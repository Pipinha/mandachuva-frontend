import { Icon } from "@iconify/react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import FooterLogged from "../../components/FooterLogged";
import history from "../../routes/history";

class CreatorProfile extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'company-profile'
        })

        this.state = {
            jobs: [
                {
                    name: 'ARIEL CHRISTINE',
                    description: 'MORNING ROUTINE',
                    icon: '/assets/img/icon-wait.png',
                    message: true,
                    open: false,
                },
                {
                    name: 'ARIEL CHRISTINE',
                    description: 'WALKING WITH MY DOG',
                    icon: '/assets/img/ico-danger.png',
                    message: false,
                    open: true,
                }
            ],
            fitCreators: [
                {
                    logo: '/assets/img/user-creator.png',
                    name: 'Ariel Christine',
                    segment: 'LIFESTYLE, FASHION',
                    fit: '80%',
                },
                {
                    logo: '/assets/img/user-creator.png',
                    name: 'Mithi',
                    segment: 'LIFESTYLE',
                    fit: '78%',
                },
                {
                    logo: '/assets/img/user-creator.png',
                    name: 'Priscila',
                    segment: 'FASHION',
                    fit: '76%',
                },
                {
                    logo: '/assets/img/user-creator.png',
                    name: 'Julia',
                    segment: 'LIFESTYLE, FASHION',
                    fit: '74%',
                },
                {
                    logo: '/assets/img/user-creator.png',
                    name: 'Vivi',
                    segment: 'LIFESTYLE, HEALTH',
                    fit: '72%',
                }
            ]
        }
    }
    submit() {

    }

    openJob(idx) {
        let newArr = [];
        for (let i = 0; i < this.state.jobs.length; i++) {
            newArr.push(this.state.jobs[i])

            if (i === idx) {
                newArr[i].open = newArr[i].open ? false : true
            }
        }

        this.setState({ jobs: newArr })
    }

    render() {
        return (
            <>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card-custom">
                                <div className="profile pb-4 company">
                                    <div className="photo">
                                        <img src="/assets/img/user-company.png" alt="Rainmakr" className="main" />
                                    </div>
                                    <div className="name text-white text-center">MERCADO LIVRE</div>
                                    <div className="followers text-blueberry text-center mt-1">4 Active Jobs</div>
                                    <div className="category2 text-steelo-l2 text-center mt-1">E-COMMERCE - BUENOS AIRES</div>
                                    <div className="px-4 mt-3"><div className="sep"></div></div>
                                    <div className="scores mt-3 px-4">
                                        <div className="scores-item d-flex justify-content-between">
                                            <div className="a text-white">Profile Hits</div>
                                            <div className="b text-white">4570</div>
                                        </div>
                                        <div className="scores-item d-flex justify-content-between mt-2">
                                            <div className="a text-white">Creators Following</div>
                                            <div className="b text-white">185</div>
                                        </div>
                                        <div className="scores-item d-flex justify-content-between mt-2">
                                            <div className="a text-white">Fits With Creators</div>
                                            <div className="b text-white">33%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-custom mt-4">
                                <div className="simple p-3">
                                    <div className="tit text-steelo-l2">FIND NEW CREATORS</div>
                                    <div className="txt text-white mt-3">Find new creators and select them with our FIT feature.</div>
                                    <div className="copy text-right mt-3">
                                        <span onClick={_ => history.push('/company/creator')} className="text-blueberry">Search now</span>
                                    </div>
                                </div>
                            </div>

                            <FooterLogged className="mt-3" />
                        </div>
                        <div className="col-md-6">
                            <div className="card-custom">
                                <div className="timeline-profile p-3">
                                    <div className="tit text-steelo-l2">GROWTH YOUR FIT WITH CREATORS</div>
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
                                            <div className="description text-white">Start<br />Buying</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="jobs-options d-flex justify-content-between mt-4">
                                <div className="menu">
                                    <Link to={'/company/profile'} className="active">ACTIVE</Link>
                                    <Link to={'/company/profile'}>FAVORITES</Link>
                                </div>
                                <div className="sort text-steelo-l2">
                                    ORDER BY <Icon icon="material-symbols:arrow-drop-down" width={24} height={24} />
                                </div>
                            </div>
                            <div className="jobs-list mt-2">
                                {this.state.jobs.map((a, ia) => (
                                    <div className={'item' + (ia > 0 ? ' mt-3' : '')} key={'job-' + ia}>
                                        <div className="card-custom" onClick={_ => this.openJob(ia)}>
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
                                                    <Link to={'/company/profile'} className="text-blueberry">More</Link>
                                                </div>
                                                <div className={'btn-show-hide text-center' + (a.open ? ' open' : '')}><Icon icon={'material-symbols:arrow-drop-' + (!a.open ? 'up' : 'down') + '-rounded'} width={24} height={24} /></div>
                                            </div>
                                        </div>
                                        <div className="item-hide" style={{ display: a.open ? 'block' : 'none' }}>
                                            <div className="timeline mt-3 d-flex justify-content-between align-items-center">
                                                <div className="timeline-point">
                                                    <div className="bal">&nbsp;</div>
                                                    <div className="description text-white">1. Purchase</div>
                                                    <div className="date text-steelo-l2">10/10/2022</div>
                                                </div>
                                                <div className="timeline-bar"></div>
                                                <div className="timeline-point">
                                                    <div className="bal">&nbsp;</div>
                                                    <div className="description text-white">2. Briefing</div>
                                                    <div className="date text-steelo-l2">20/10/2022</div>
                                                </div>
                                                <div className="timeline-bar"></div>
                                                <div className="timeline-point">
                                                    <div className="bal">&nbsp;</div>
                                                    <div className="description text-white">3. Creation</div>
                                                    <div className="date text-steelo-l2">30/10/2022</div>
                                                </div>
                                                <div className="timeline-bar"></div>
                                                <div className="timeline-point error">
                                                    <div className="bal">&nbsp;</div>
                                                    <div className="description text-white">4. Publish</div>
                                                    <div className="date text-steelo-l2">10/11/2022</div>
                                                </div>
                                                <div className="timeline-bar"></div>
                                                <div className="timeline-point off">
                                                    <div className="bal">&nbsp;</div>
                                                    <div className="description text-white">5. Report</div>
                                                    <div className="date text-steelo-l2">Waiting</div>
                                                </div>
                                                <div className="timeline-bar"></div>
                                                <div className="timeline-point off">
                                                    <div className="bal">&nbsp;</div>
                                                    <div className="description text-white">6. Finish</div>
                                                    <div className="date text-steelo-l2">Waiting</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mt-4 d-block d-sm-none"></div>
                            <div className="card-custom">
                                <div className="simple p-3">
                                    <div className="tit text-steelo-l2">FIT WITH CREATORS</div>
                                    <div className="list-fit-companies">
                                        {this.state.fitCreators.map((a, ia) => (
                                            <div className="item d-flex align-items-center" key={'fit-' + ia}>
                                                <div className="logo mr-2">
                                                    <img src={a.logo} alt="Rainmakr" />
                                                </div>
                                                <div className="infos flex-fill">
                                                    <div className="name text-white">{a.name}</div>
                                                    <div className="brand text-steelo-l2">{a.segment}</div>
                                                </div>
                                                <div className="fit">
                                                    <div className="a text-steelo-l2">FIT</div>
                                                    <div className="b text-white">{a.fit}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="copy text-right mt-3">
                                        <span className="text-blueberry cursor-pointer" onClick={_=>history.push('/company/creator')}>See others</span>
                                    </div>
                                </div>
                            </div>

                            <div className="card-custom mt-4">
                                <div className="simple p-3">
                                    <div className="tit text-steelo-l2">INVITE CREATORS</div>
                                    <div className="txt text-white mt-3">Invite creators and get exclusive benefits.</div>
                                    <div className="copy text-right mt-3">
                                        <span onClick={_ => history.push('/')} className="text-blueberry">Invite</span>
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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(CreatorProfile))