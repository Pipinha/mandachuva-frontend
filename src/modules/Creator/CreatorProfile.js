import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class CreatorProfile extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'creator-profile'
        })

        this.state = {

        }
    }
    submit() {

    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card-custom">
                                Teste
                            </div>
                        </div>
                        <div className="col-md-6">

                        </div>
                        <div className="col-md-3">

                        </div>
                    </div>
                </div>
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