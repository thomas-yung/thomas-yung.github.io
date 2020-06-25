import React, {Component, Fragment} from 'react';
import {NavLink} from "react-router-dom";
import '../Stylesheets/ErrorPage.css';

export default class ErrorPage extends Component {

    render() {
        return(
            <Fragment>
                <h1 className={'error-status'}>404</h1>
                <h1 className={'error-face'}>:/</h1>
                <h2 className={'error-message'}>That page doesn't exist...</h2>
                <h2 className={'error-message'}>Try <NavLink to={'/'}>returning home</NavLink> to see what's available</h2>
            </Fragment>
        );
    }

}