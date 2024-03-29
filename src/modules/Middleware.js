import { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Header from "../components/Header";
import { PROFILE_COMPANY, PROFILE_CREATOR } from "../constants/Config";

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
                            if (!this.props.store.session.logged && a.auth && a.public === null) {
                                return <Redirect to={'/account/login'} />
                            }
                            if (this.props.store.session.logged && !a.auth && this.props.store.session.profileId === PROFILE_CREATOR && a.public === null) {
                                return <Redirect to={'/creator/profile'} />
                            }
                            if (this.props.store.session.logged && !a.auth && this.props.store.session.profileId === PROFILE_COMPANY && a.public === null) {
                                return <Redirect to={'/company/profile'} />
                            }
                            if (this.props.store.session.logged && this.props.store.session.profileId !== a.profileId && a.public === null) {
                                if(this.props.store.session.profileId === PROFILE_CREATOR){
                                    return <Redirect to={'/creator/profile'} />
                                }
                                if(this.props.store.session.profileId === PROFILE_COMPANY){
                                    return <Redirect to={'/company/profile'} />
                                }
                                //TODO CRIAR TELA DE ERRO para redireiconar caso o profileId não condiz com as opções, aplicar erro sistemico
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