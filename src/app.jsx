const React = require("react");
const ReactDOM = require("react-dom");
const AppView = require("./components/AppView.jsx");
const Provider = require("react-redux").Provider;
const { ConnectedRouter } = require("connected-react-router");
const { store, history } = require("./store.jsx");
const { Route, Switch } = require("react-router");


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <>
                <Switch>
                    <Route path="/" component={AppView} />
                </Switch>
            </>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("app")
);