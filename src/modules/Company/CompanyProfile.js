import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class CompanyProfile extends Component {
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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(CompanyProfile))