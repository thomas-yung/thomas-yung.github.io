import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './Stylesheets/App.css';
import HomePage from "./Pages/HomePage";
import ProjectPage from "./Pages/ProjectsPage";
import ErrorPage from "./Pages/ErrorPage";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div id="page-wrapper">
                    <Switch>
                        <Route path={'/projects'}><ProjectPage/></Route>
                        <Route path={'/'} exact><HomePage/></Route>
                        <Route><ErrorPage/></Route>
                    </Switch>
                </div>
            </BrowserRouter>

        );
    }

}

export default App;
