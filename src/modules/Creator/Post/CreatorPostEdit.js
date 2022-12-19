import { Icon } from "@iconify/react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class CreatorPostEdit extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'creator-post-edit'
        })

        this.state = {
            social: ''
        }
        this.changeSocial = this.changeSocial.bind(this);
    }
    submit() {
        this.props.history.push('/creator/ready-to-post')
    }

    changeSocial(e) {

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
                                        <Link to={'/creator/ready-to-post'} className="active mr-3">READY TO POST</Link>
                                        <Link to={'#a'}>MY INSTAGRAM</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="card-custom post-edit mt-4">
                                <div className="post-edit p-4">
                                    <form onSubmit={e => { e.preventDefault(); this.submit() }}>
                                        <div className="form-row">
                                            <div className="col-md-12">
                                                <label className="text-steelo-l2">JOB NAME</label>
                                                <input type="text" className="form-control with-label3" placeholder="Write the exactly description" />
                                            </div>
                                        </div>
                                        <div className="form-row mt-3">
                                            <div className="col-md-4">
                                                <div className="photo d-flex align-items-center justify-content-center">
                                                    <img src="/assets/img/img-add-photo.png" alt="Rainmakr" className="img-fluid" />
                                                </div>
                                                <div className="thumbs d-flex justify-content-between mt-3">
                                                    <div className="d-flex justify-content-center align-items-center thumb">
                                                        <img src="/assets/img/img-add-photo.png" alt="Rainmakr" className="img-fluid" />
                                                    </div>
                                                    <div className="d-flex justify-content-center align-items-center thumb">
                                                        <img src="/assets/img/img-add-photo.png" alt="Rainmakr" className="img-fluid" />
                                                    </div>
                                                    <div className="d-flex justify-content-center align-items-center thumb">
                                                        <img src="/assets/img/img-add-photo.png" alt="Rainmakr" className="img-fluid" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="form-row" onChange={this.changeSocial}>
                                                    <div className="col-md-4">
                                                        <label className="text-white d-flex align-items-center"><input type="radio" name="social" value="Feed" className="mr-2" /> Feed</label>
                                                    </div>
                                                    <div className="col-md-4 d-flex justify-content-center">
                                                        <label className="text-white d-flex align-items-center"><input type="radio" name="social" value="Stories" className="mr-2" /> Stories</label>
                                                    </div>
                                                    <div className="col-md-4 d-flex justify-content-end">
                                                        <label className="text-white d-flex align-items-center"><input type="radio" name="social" value="Reels" className="mr-2" /> Reels</label>
                                                    </div>
                                                </div>
                                                <div className="form-row mt-2">
                                                    <div className="col-md-12">
                                                        <label className="text-steelo-l2">STORIES PRICE</label>
                                                        <input type="text" className="form-control with-label3" placeholder="Set the value" />
                                                    </div>
                                                </div>
                                                <div className="form-row mt-2">
                                                    <div className="col-md-12">
                                                        <label className="text-steelo-l2">REELS PRICE</label>
                                                        <input type="text" className="form-control with-label3" placeholder="Set the value" />
                                                    </div>
                                                </div>
                                                <div className="form-row mt-2">
                                                    <div className="col-md-12">
                                                        <label className="text-steelo-l2">FEED PRICE</label>
                                                        <input type="text" className="form-control with-label3" placeholder="Set the value" />
                                                    </div>
                                                </div>
                                                <div className="text-right mt-5">
                                                    <button type="submit" className="btn btn-d with-shadow">Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(CreatorPostEdit))