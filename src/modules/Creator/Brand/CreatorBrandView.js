import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class CreatorBrandView extends Component {
    constructor(props) {
        super(props)

        props.handlerHeader({
            page: 'creator-brand-view'
        })

        this.state = {
            
        }
    }
    render() {
        return (
            <>
                <div className="container mt-4">
                    
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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(CreatorBrandView))