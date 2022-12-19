import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Icon } from "@iconify/react";
import Switch from "react-switch";
import Swal from "sweetalert2";

class CreatorPostList extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'creator-post-list'
        })

        this.state = {
            store: false,
            jobs: [
                {
                    name: 'DRINKS TIPS',
                    photo: '/assets/img/photo-job-a.png',
                    socials: [
                        {
                            icon: 'bi:tiktok',
                            name: 'TIKTOK'
                        },
                        {
                            icon: 'bi:instagram',
                            name: 'REELS'
                        }
                    ],
                    potential: '10K',
                    stories: '$1,000',
                    reels: '$1,000',
                    feed: '$1,000'
                },
                {
                    name: 'HEALTHY BRUNCH',
                    photo: '/assets/img/photo-job-a.png',
                    socials: [
                        {
                            icon: 'bi:instagram',
                            name: 'STORIES'
                        }
                    ],
                    potential: '10K',
                    stories: '$1,000',
                    reels: '$1,000',
                    feed: '$1,000'
                },
                {
                    name: 'FASHION CHOICES',
                    photo: '/assets/img/photo-job-b.png',
                    socials: [
                        {
                            icon: 'bi:tiktok',
                            name: 'TIKTOK'
                        }
                    ],
                    potential: '10K',
                    stories: '$1,000',
                    reels: '$1,000',
                    feed: '$1,000'
                },
                {
                    name: 'MORNING ROUTINE',
                    photo: '/assets/img/photo-job-d.png',
                    socials: [
                        {
                            icon: 'bi:instagram',
                            name: 'STORIES'
                        },
                        {
                            icon: 'bi:instagram',
                            name: 'FEED'
                        }
                    ],
                    potential: '10K',
                    stories: '$1,000',
                    reels: '$1,000',
                    feed: '$1,000'
                },
                {
                    name: 'DRINKS TIPS',
                    photo: '/assets/img/photo-job-a.png',
                    socials: [
                        {
                            icon: 'bi:tiktok',
                            name: 'TIKTOK'
                        },
                        {
                            icon: 'bi:instagram',
                            name: 'REELS'
                        }
                    ],
                    potential: '10K',
                    stories: '$1,000',
                    reels: '$1,000',
                    feed: '$1,000'
                },
                {
                    name: 'HEALTHY BRUNCH',
                    photo: '/assets/img/photo-job-c.png',
                    socials: [
                        {
                            icon: 'bi:instagram',
                            name: 'STORIES'
                        }
                    ],
                    potential: '10K',
                    stories: '$1,000',
                    reels: '$1,000',
                    feed: '$1,000'
                },
                {
                    name: 'FASHION CHOICES',
                    photo: '/assets/img/photo-job-b.png',
                    socials: [
                        {
                            icon: 'bi:tiktok',
                            name: 'TIKTOK'
                        }
                    ],
                    potential: '10K',
                    stories: '$1,000',
                    reels: '$1,000',
                    feed: '$1,000'
                }
            ]
        }

        this.changeStore = this.changeStore.bind(this);
    }
    changeStore(v) {
        this.setState({ store: v })
    }

    deleteJobItem(idx) {
        Swal.fire({
            title: 'Are you sure you want to delete?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Yes',
            denyButtonText: 'No',
            background: '#273539',
            color: '#fff',
        }).then((result) => {
            if (result.isConfirmed) {
                let newArr = [];
                for (let i = 0; i < this.state.jobs.length; i++) {
                    if (i !== idx) {
                        newArr.push(this.state.jobs[i])
                    }
                }
                this.setState({ jobs: newArr })
            }
        })
    }

    render() {
        return (
            <>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card-custom bg-profile">
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
                                            <div className="b text-white">5%</div>
                                        </div>
                                        <div className="scores-item d-flex justify-content-between py-2">
                                            <div className="a text-white">Credibility</div>
                                            <div className="b text-white">93%</div>
                                        </div>
                                        <div className="scores-item d-flex justify-content-between py-2">
                                            <div className="a text-white">Followers</div>
                                            <div className="b text-white">101.380</div>
                                        </div>
                                        <div className="scores-item d-flex justify-content-between py-2">
                                            <div className="a text-white">Likes</div>
                                            <div className="b text-white">9.375</div>
                                        </div>
                                    </div>
                                    <div className="social-links text-center mt-3">
                                        <a href="https://instagram.com" className="text-white"><Icon icon="bi:instagram" width={24} height={24} /></a>
                                        <a href="https://instagram.com" className="text-white"><Icon icon="bi:tiktok" width={24} height={24} /></a>
                                        <a href="https://instagram.com" className="text-white"><Icon icon="bi:snapchat" width={24} height={24} /></a>
                                    </div>
                                    <div className="links mt-4 px-4">
                                        <a href="#a" className="item btn btn-block btn-a">Direct book me</a>
                                        <a href="#a" className="item btn btn-block btn-b active">Follow</a>
                                        <a href="#a" className="item btn btn-block btn-b">My store</a>
                                        <a href="#a" className="item btn btn-block btn-b">My podcast</a>
                                        <a href="#a" className="item btn btn-block btn-b">Wish list</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="post-list">
                                <div className="menu-store d-flex align-items-center justify-content-between">
                                    <div className="menu">
                                        <Link to={'#a'} className="active mr-3">READY TO POST</Link>
                                        <Link to={'#a'}>MY INSTAGRAM</Link>
                                    </div>
                                    <div className="store d-flex align-items-center justify-content-center">
                                        <span className="a text-white mr-1">Store:</span>
                                        <span className="b text-white mr-2">On</span>
                                        <Switch onChange={this.changeStore} width={45} checked={this.state.store} offColor="#3CE9FF" onColor="#3CE9FF" offHandleColor="#00AFC6" onHandleColor="#00AFC6" uncheckedIcon={false} checkedIcon={false} checkedHandleIcon={<Icon icon="material-symbols:check" width={18} height={18} color="#ffffff" style={{ marginTop: '-6px', marginLeft: '1px' }} />} uncheckedHandleIcon={<Icon icon="material-symbols:close" width={18} height={18} color="#ffffff" style={{ marginTop: '-6px', marginLeft: '1px' }} />} handleDiameter={20} />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-3 mt-3">
                                        <div className="card-custom">
                                            <div className="post-new-item p-3">
                                                <div className="title text-white">CREATE YOUR POST</div>
                                                <div className="start d-flex flex-column align-items-center justify-content-center mt-3">
                                                    <div className="icon">
                                                        <img src="/assets/img/icon-start-now.png" alt="Rainmakr" />
                                                    </div>
                                                    <Link to={'/creator/ready-to-post'} className="mt-1">START NOW</Link>
                                                </div>
                                                <div className="description mt-3">Create your ready to post content.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {this.state.jobs.map((a, ia) => (
                                        <div className="col-md-3 mt-3" key={'post-item-' + ia}>
                                            <div className="card-custom post-item">
                                                <div className="post-item p-3">
                                                    <div className="title text-white">{a.name}</div>
                                                    <div className="photo mt-3">
                                                        <img src={a.photo} alt="Rainmakr" className="img-fluid" />
                                                        <div className="infos p-2">
                                                            <div className="infos-title">POTENTIAL REACH:</div>
                                                            <div className="potential mt-3">{a.potential}</div>
                                                            <div className="prices mt-3">
                                                                <div className="price-item mt-2 d-flex justify-content-between align-items-center">
                                                                    <div className="a">Stories:</div>
                                                                    <div className="b">$1,000</div>
                                                                </div>
                                                                <div className="price-item mt-2 d-flex justify-content-between align-items-center">
                                                                    <div className="a">REELS:</div>
                                                                    <div className="b">$1,000</div>
                                                                </div>
                                                                <div className="price-item mt-2 d-flex justify-content-between align-items-center">
                                                                    <div className="a">FEED:</div>
                                                                    <div className="b">$1,000</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="social d-flex justify-content-center mt-3">
                                                        {a.socials.map((b, ib) => (
                                                            <Link key={'post-item-social-' + ib} to={'#a'} className="text-white"><Icon icon={b.icon} width={12} height={12} /> {b.name}</Link>
                                                        ))}                                                    </div>
                                                    <div className="options d-flex justify-content-center mt-3">
                                                        <Link to={'#a'} className="edit d-flex justify-content-center align-items-center"><Icon icon="akar-icons:pencil" width={16} height={16} /></Link>
                                                        <Link to={'#a'} onClick={_ => this.deleteJobItem(ia)} className="trash d-flex justify-content-center align-items-center"><Icon icon="tabler:trash" width={16} height={16} /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 text-center">
                                    <Link to={'#a'} className="btn btn-c">+ Add a new creation</Link>
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