import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Icon } from "@iconify/react";
import Switch from "react-switch";

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
                    name: 'DRINKS TIPS'
                }
            ]
        }

        this.changeStore = this.changeStore.bind(this);
    }
    changeStore(v){
        this.setState({store: v})
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
                                            <div className="b text-white">75%</div>
                                        </div>
                                        <div className="scores-item d-flex justify-content-between py-2">
                                            <div className="a text-white">Credibility</div>
                                            <div className="b text-white">93%</div>
                                        </div>
                                        <div className="scores-item d-flex justify-content-between py-2">
                                            <div className="a text-white">Followers</div>
                                            <div className="b text-white">9.375</div>
                                        </div>
                                        <div className="scores-item d-flex justify-content-between py-2">
                                            <div className="a text-white">Likes</div>
                                            <div className="b text-white">101.380</div>
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
                                        <Switch onChange={this.changeStore} width={45} checked={this.state.store} offColor="#3CE9FF" onColor="#3CE9FF" offHandleColor="#00AFC6" onHandleColor="#00AFC6" uncheckedIcon={false} checkedIcon={false} checkedHandleIcon={<Icon icon="material-symbols:check" width={18} height={18} color="#ffffff" style={{marginTop:'-6px',marginLeft:'1px'}} />} uncheckedHandleIcon={<Icon icon="material-symbols:close" width={18} height={18} color="#ffffff" style={{marginTop:'-6px',marginLeft:'1px'}} />} handleDiameter={20} />
                                    </div>
                                </div>
                                <div className="row mt-4 pt-2">
                                    <div className="col-md-3">
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
                                    <div className="col-md-3">
                                        <div className="card-custom post-item">
                                            <div className="post-item p-3">
                                                <div className="title text-white">DRINKS TIPS</div>
                                                <div className="photo mt-3">
                                                    <img src="/assets/img/photo-job-a.png" alt="Rainmakr" className="img-fluid" />
                                                </div>
                                                <div className="social d-flex justify-content-center mt-3">
                                                    <Link to={'#a'} className="text-white"><Icon icon="bi:tiktok" width={12} height={12} /> TIKTOK</Link>
                                                    <Link to={'#a'} className="text-white"><Icon icon="bi:instagram" width={12} height={12} /> REELS</Link>
                                                </div>
                                                <div className="options d-flex justify-content-center mt-3">
                                                    <Link to={'#a'} className="edit d-flex justify-content-center align-items-center"><Icon icon="akar-icons:pencil" width={16} height={16} /></Link>
                                                    <Link to={'#a'} className="trash d-flex justify-content-center align-items-center"><Icon icon="tabler:trash" width={16} height={16} /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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