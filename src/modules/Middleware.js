import { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { sessionStart } from "../actions/App";
import Header from "../components/Header";

class Middleware extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tab: [],
            categoryId: 0,
            menuId: 0,
            auth: false,
        }

        props.dispatch(sessionStart);
    }

    handlerHeader(attr) {
        this.setState({
            tab: attr.tab,
            categoryId: attr.categoryId,
            menuId: attr.menuId,
            auth: attr.auth
        })
    }

    render() {

        return (
            <Header categoryId={this.state.categoryId} menuId={this.state.menuId} tab={this.state.tab} auth={this.state.auth}>
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