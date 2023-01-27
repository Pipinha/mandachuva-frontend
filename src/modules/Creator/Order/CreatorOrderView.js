import { Icon } from "@iconify/react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { actionCompanyOrderSendMessage } from "../../../actions/Company/ActionCompanyOrder";
import Helper from "../../../components/Helper";

class CreatorOrderView extends Component {
    messagesEnd = null
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'creator-order-view'
        })

        this.state = {
            confirm: false,
            step: 1,
            text: '',
        }
    }
    sendMessage() {
        let text = this.state.text
        this.props.dispatch(actionCompanyOrderSendMessage({
            photo: '/assets/img/user-company.png',
            side: 1,
            text: text,
        }))
        this.setState({ text: '' })
        this.messageScrollToBottom();
    }
    messageScrollToBottom() {
        window.setTimeout(_ => this.messagesEnd.scrollTo(0, this.messagesEnd.scrollHeight), 400)
    }
    componentDidMount() {
        this.messageScrollToBottom();
    }
    componentDidUpdate() {
        this.messageScrollToBottom();
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
                                    <Link to={'/creator/order/3'} className="a">ARIEL CHRISTINE {'>'} MORNING ROUTINE</Link>
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
                                        <img src="/assets/img/user-creator.png" alt="Rainmakr" className="main" />
                                    </div>
                                    <div className="name text-white text-center mt-4">ARIEL CHRISTINE</div>
                                    <div className="country-state2 text-center text-steelo-l2 mt-3">LOS ANGELES, CA</div>
                                    <div className="segment text-blueberry text-center mt-2">LIFESTYLE, FASHION</div>
                                    <div className="scores2 mt-4">
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
                                    <div className="social-links text-center mt-4">
                                        <a href="https://instagram.com" className="text-white"><Icon icon="bi:instagram" width={32} height={32} /></a>
                                        <a href="https://instagram.com" className="text-white"><Icon icon="bi:tiktok" width={32} height={32} /></a>
                                        <a href="https://instagram.com" className="text-white"><Icon icon="bi:snapchat" width={32} height={32} /></a>
                                    </div>
                                    <div className="links mt-4">
                                        <a href="#a" className="item btn btn-block btn-a">Direct book me</a>
                                        <a href="#a" className="item btn btn-block btn-b active">Follow</a>
                                        <a href="#a" className="item btn btn-block btn-b">My store</a>
                                        <a href="#a" className="item btn btn-block btn-b">My podcast</a>
                                        <a href="#a" className="item btn btn-block btn-b">Wish list</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 list-job">
                            <div className="back-to d-flex justify-content-between mt-1">
                                <Link to={'/creator/profile'} className="text-blueberry d-flex align-items-center"><Icon icon="material-symbols:arrow-back-ios-new-rounded" width={12} height={12} className="mr-1" /> Back to dashboard</Link>
                                <Link to={'#a'} className="text-blueberry d-flex align-items-center">Ready to post details <Icon icon="material-symbols:info" width={24} height={24} className="ml-1" /></Link>
                            </div>

                            <div className="progress-stage mt-3">
                                <div className="in">
                                    <div className="tit d-flex justify-content-between align-items-center">
                                        <div className="a">PROGRESS</div>
                                        <div className="a">STAGE 2 OF 6</div>
                                    </div>
                                    <div className="timeline d-flex align-items-center">
                                        <div className="point active ok">
                                            <div className="circle"></div>
                                            <div className="desc">
                                                <div className="a">1. Purchase</div>
                                                <div className="b">03/10/2022</div>
                                            </div>
                                        </div>
                                        <div className={'bar ' + (this.state.step >= 1 ? ' ok ' : '') + ' flex-fill'}></div>
                                        <div className={'point ' + (this.state.step === 1 ? ' active ' : (this.state.step > 1 ? ' active ok ' : ''))}>
                                            <div className="circle"></div>
                                            <div className="desc">
                                                <div className="a">2. Briefing</div>
                                                <div className="b">WAITING</div>
                                            </div>
                                        </div>
                                        <div className={'bar ' + (this.state.step >= 2 ? ' ok ' : '') + ' flex-fill'}></div>
                                        <div className={'point ' + (this.state.step === 2 ? ' active ' : (this.state.step > 2 ? ' active ok ' : ''))}>
                                            <div className="circle"></div>
                                            <div className="desc">
                                                <div className="a">3. Creation</div>
                                                <div className="b">WAITING</div>
                                            </div>
                                        </div>
                                        <div className={'bar ' + (this.state.step >= 3 ? ' ok ' : '') + ' flex-fill'}></div>
                                        <div className={'point ' + (this.state.step === 3 ? ' active ' : (this.state.step > 3 ? ' active ok ' : ''))}>
                                            <div className="circle"></div>
                                            <div className="desc">
                                                <div className="a">2. Briefing</div>
                                                <div className="b">WAITING</div>
                                            </div>
                                        </div>
                                        <div className={'bar ' + (this.state.step >= 4 ? ' ok ' : '') + ' flex-fill'}></div>
                                        <div className={'point ' + (this.state.step === 4 ? ' active ' : (this.state.step > 4 ? ' active ok ' : ''))}>
                                            <div className="circle"></div>
                                            <div className="desc">
                                                <div className="a">2. Briefing</div>
                                                <div className="b">WAITING</div>
                                            </div>
                                        </div>
                                        <div className={'bar ' + (this.state.step >= 5 ? ' ok ' : '') + ' flex-fill'}></div>
                                        <div className={'point ' + (this.state.step === 5 ? ' active ' : (this.state.step > 5 ? ' active ok ' : ''))}>
                                            <div className="circle"></div>
                                            <div className="desc">
                                                <div className="a">2. Briefing</div>
                                                <div className="b">WAITING</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stage">
                                    {this.state.step === 1 ? (
                                        <div className="step1 d-flex align-items-center">
                                            <div className="stage-tit">
                                                <div className="a">SET UP THE DELIVERY</div>
                                                <div className="b mt-2">Talk to the creator to set up what needs to be done. When the both sides are ok, go to the next step. </div>
                                            </div>
                                            <div className="dates d-flex justify-content-around ml-3">
                                                <div>
                                                    <label className="text-steelo-l2">LAST POST DELIVERY</label>
                                                    <input type="text" className="form-control with-label3" placeholder="AAAA-MM-YYYY" />
                                                </div>
                                                <div className="ml-3">
                                                    <label className="text-steelo-l2">LAST PUBLICATION</label>
                                                    <input type="text" className="form-control with-label3" placeholder="AAAA-MM-YYYY" />
                                                </div>
                                            </div>
                                            <div className="opts flex-fill px-3">
                                                <div className="chk d-flex justify-content-center">
                                                    <label className="custom-checkbox">
                                                        <input type="checkbox" checked={this.state.confirm} onChange={e => this.setState({ confirm: e.target.checked })} />
                                                        <span className="checkmark"></span>
                                                        <span className="text-white">I confirm the dates</span>
                                                    </label>
                                                </div>
                                                <div className="btns">
                                                    <button type="button" className="btn btn-block btn-a with-shadow" onClick={_ => this.setState({ step: this.state.step + 1 })}>Go to creation</button>
                                                </div>
                                            </div>
                                        </div>
                                    ) : ''}
                                    {this.state.step === 2 ? (
                                        <div className="d-flex align-items-center">
                                            <div className="stage-tit">
                                                <div className="a">CREATION AND REVISION</div>
                                                <div className="b mt-2">Talk to the creator to creator to check if all the posts are correct what both established in briefing.</div>
                                            </div>
                                            <div className="flex-fill"></div>
                                            <div className="opts px-3">
                                                <div className="chk d-flex justify-content-center">
                                                    <label className="custom-checkbox">
                                                        <input type="checkbox" checked={this.state.confirm} onChange={e => this.setState({ confirm: e.target.checked })} />
                                                        <span className="checkmark"></span>
                                                        <span className="text-white">I aprovee the posts</span>
                                                    </label>
                                                </div>
                                                <div className="btns">
                                                    <button type="button" className="btn btn-block btn-a with-shadow" onClick={_ => this.setState({ step: this.state.step + 1 })}>Go to publish</button>
                                                </div>
                                            </div>
                                        </div>
                                    ) : ''}
                                    {this.state.step === 3 ? (
                                        <div className="d-flex align-items-center">
                                            <div className="stage-tit">
                                                <div className="a">SET THE POSTS DATES</div>
                                                <div className="b mt-2">Set with the creator the dates for every post and check all the creations previously made.</div>
                                            </div>
                                            <div className="flex-fill"></div>
                                            <div className="opts px-3">
                                                <div className="chk d-flex justify-content-center">
                                                    <label className="custom-checkbox">
                                                        <input type="checkbox" checked={this.state.confirm} onChange={e => this.setState({ confirm: e.target.checked })} />
                                                        <span className="checkmark"></span>
                                                        <span className="text-white">I agree with the dates</span>
                                                    </label>
                                                </div>
                                                <div className="btns">
                                                    <button type="button" className="btn btn-block btn-a with-shadow" onClick={_ => this.setState({ step: this.state.step + 1 })}>Go to report</button>
                                                </div>
                                            </div>
                                        </div>
                                    ) : ''}
                                    {this.state.step === 4 ? (
                                        <div className="d-flex align-items-center">
                                            <div className="stage-tit">
                                                <div className="a">REPORT</div>
                                                <div className="b mt-2">Talk with the creator about de feedback and confirm the end of the project.</div>
                                            </div>
                                            <div className="flex-fill"></div>
                                            <div className="opts px-3">
                                                <div className="chk d-flex justify-content-center">
                                                    <label className="custom-checkbox">
                                                        <input type="checkbox" checked={this.state.confirm} onChange={e => this.setState({ confirm: e.target.checked })} />
                                                        <span className="checkmark"></span>
                                                        <span className="text-white">I agree with the report</span>
                                                    </label>
                                                </div>
                                                <div className="btns">
                                                    <button type="button" className="btn btn-block btn-a with-shadow" onClick={_ => this.setState({ step: this.state.step + 1 })}>Finish the job</button>
                                                </div>
                                            </div>
                                        </div>
                                    ) : ''}
                                    {this.state.step === 5 ? (
                                        <div className="d-flex align-items-center">
                                            <div className="stage-tit">
                                                <div className="a">FINISH THE JOB</div>
                                                <div className="b mt-2">If everything is alright, at the end of project give the creator the payment for the job.</div>
                                            </div>
                                            <div className="flex-fill"></div>
                                            <div className="opts px-3">
                                                <div className="chk d-flex justify-content-center">
                                                    <label className="custom-checkbox">
                                                        <input type="checkbox" checked={this.state.confirm} onChange={e => this.setState({ confirm: e.target.checked })} />
                                                        <span className="checkmark"></span>
                                                        <span className="text-white">The job is finished</span>
                                                    </label>
                                                </div>
                                                <div className="btns">
                                                    <button type="button" className="btn btn-block btn-a with-shadow" onClick={_ => this.setState({ step: this.state.step + 1 })}>Pay the creator</button>
                                                </div>
                                            </div>
                                        </div>
                                    ) : ''}
                                    {this.state.step === 6 ? (
                                        <div className="d-flex align-items-center justify-content-center">
                                            <div className="stage-finish">
                                                <div className="a">THE JOB IS FINISHED</div>
                                                <div className="b mt-2">The history can be seen in the archive.</div>
                                            </div>
                                        </div>
                                    ) : ''}
                                </div>
                            </div>
                            <div className="card-msg mt-4">
                                <div className="card-msg-tit d-flex justify-content-between align-items-center">
                                    <div className="a">{this.state.step < 6 ? 'MESSENGER' : 'MESSENGER DISCONNECT'}</div>
                                    {this.state.step < 6 ?
                                        <div className="opts d-flex align-items-center">
                                            <div className="a">
                                                <select className="form-control with-label3">
                                                    <option value={'0'}>Briefing</option>
                                                </select>
                                            </div>
                                            <div className="b ml-3">
                                                <input type="text" placeholder="Search in..." className="form-control with-label4" />
                                                <Icon icon="material-symbols:search" width={24} height={24} />
                                            </div>
                                        </div> : ''}
                                </div>
                                <div className="card-msg-list" ref={(el) => { this.messagesEnd = el; }}>
                                    {this.props.store.order.messages.map((a, ai) => (
                                        <div className={'card-msg-item d-flex ' + (a.side === 0 ? 'justify-content-start' : 'justify-content-end')} key={'msg-' + ai}>
                                            <div className="card-msg-content d-flex align-items-start">
                                                {a.side === 0 ?
                                                    <>
                                                        <div className="card-msg-photo">
                                                            <img src={a.photo} alt="Rainmakr" />
                                                        </div>
                                                        <div className="card-msg-text ml-3" dangerouslySetInnerHTML={{ __html: Helper.nl2br(a.text) }} ></div>
                                                    </>
                                                    :
                                                    <>
                                                        <div className="card-msg-text text-right" dangerouslySetInnerHTML={{ __html: Helper.nl2br(a.text) }} ></div>
                                                        <div className="card-msg-photo ml-3">
                                                            <img src={a.photo} alt="Rainmakr" />
                                                        </div>
                                                    </>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="card-msg-form">
                                    <form className="d-flex align-items-center" onSubmit={e => { e.preventDefault(); this.sendMessage() }}>
                                        <div className="bt-file mr-3">
                                            <button type="button" className="btn btn-submit btn-lg" disabled={this.state.step>=6}><Icon icon="mdi:attachment-vertical" width={24} height={24} /></button>
                                        </div>
                                        <div className="field-text flex-fill">
                                            <input type="text" className="form-control with-label3" placeholder="Type your message..." value={this.state.text} onChange={e => this.setState({ text: e.target.value })} disabled={this.state.step>=6} />
                                        </div>
                                        <div className="bt-send ml-3">
                                            <button type="submit" className="btn btn-submit btn-lg" disabled={this.state.step>=6}>Send</button>
                                        </div>
                                    </form>
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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(CreatorOrderView))