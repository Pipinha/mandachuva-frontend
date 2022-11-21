import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Component } from 'react';
import routes from './routes/routes';
import CustomNavigate from './routes/CustomNavigate';
import history from './routes/history';

class App extends Component {

  render() {
    return (
      <CustomNavigate history={history}>
        <Switch>
          {routes.map((row, i) => {
            if (row.routes.length > 0) {
              return (
                <Route key={'route-' + i} path={row.path} render={(props) => <row.component {...props} routes={row.routes} auth={row.auth} />} />
              )
            }
            return <Route key={'route-' + i} exact={row.exact} path={row.path} component={row.component} />
          })}
        </Switch>
      </CustomNavigate>
    )
  };
}

const mapPropsToState = function (store) {
  return {
    store: store
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

export default connect(mapPropsToState, mapDispatchToProps)(App);
