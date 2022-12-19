import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class CreatorSetting extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'creator-setting'
        })

        this.state = {
            
        }
    }
    submit() {

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
                                    <div className="txt text-white">SETTINGS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card-custom">

                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="card-custom">
                                
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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(CreatorSetting))