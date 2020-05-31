import React from 'react';
import './styles/App.css';
import Container from 'react-bootstrap/Container';
import { Switch, Router, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import IndexPage from './pages/index/Index.Page';
import EvaluacionPage from './pages/evaluaciones/Evaluacion.Page';
import NotFoundPage from './pages/notfound/NotFound.Page';

import Toast from './components/toast/Toast.Component';

const App = () => (
    <div className="App-header">
        <Container>
            <Router history={createBrowserHistory()}>
                <Switch>
                    <Route path="/" exact component={IndexPage}/>
                    <Route path="/evaluaciones" exact component={EvaluacionPage}/>
                    <Route path="/notfound" exact component={NotFoundPage}/>
                    <Redirect to="/notfound" />
                </Switch>
            </Router>
        </Container>
        <Toast/>
    </div>
)

export default App;
