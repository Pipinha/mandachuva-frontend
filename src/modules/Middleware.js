import { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Header from "../components/Header";

class Middleware extends Component {
    constructor(props) {
        super(props)

        this.state = {
            page: 'home',
        }
    }

    handlerHeader(attr) {
        this.setState({
            page: attr.page,
        })
    }

    render() {

        return (
            <Header page={this.state.page}>
                <Switch>
                    {this.props.routes.map((a, i) => {
                        return <Route key={'route-middleware-' + i} exact={a.exact} path={a.path} render={(props) => {
                            if (!this.props.store.session.logged && a.auth) {
                                return <Redirect to={'/account/login'} />
                            }
                            if (this.props.store.session.logged && !a.auth) {
                                return <Redirect to={'/dashboard'} />
                            }
                            return <a.component {...props} handlerHeader={(attr) => this.handlerHeader(attr)} />
                        }} />
                    })}
                </Switch>
            </Header>
        )
    }
}

Middleware.defaultProps = {
    routes: [],
}

const mapPropsToState = function (store) {
    return {
        store: store
    }
}

const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
})

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(Middleware))