import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

export default class HomePage extends Component {

    render() {
        return (
            <Fragment>
                <div id="page-wrapper">
                    <h1 className={'name-title backed-text'}>Thomas Yung</h1>
                    <h3 className={'role-title backed-text'}>
                        Software Engineer
                    </h3>

                    <div id={'options-wrapper'}>
                        <div className={'stackable'}>
                            <a className={'option-text backed-text'}
                               href="https://drive.google.com/file/d/1iUfLsJz8YEqU7fhagFJOm5CDZPhfTjW1/view?usp=sharing"
                               target="_blank"
                               rel="noopener noreferrer">
                                CV
                            </a>
                        </div>
                        <div className={'stackable'}>
                            <Link to={'projects'}
                                  className={'option-text backed-text'}
                                  rel="noopener noreferrer">
                                Projects
                            </Link>
                        </div>
                        <div className={'stackable'}>
                            <a className={'option-text backed-text'}
                               href="https://github.com/thomas-yung"
                               target="_blank"
                               rel="noopener noreferrer">
                                GitHub
                            </a>
                        </div>
                        <div className={'stackable'}>
                            <a className={'option-text backed-text'}
                               href="https://www.linkedin.com/in/thomas-yung-42216b13a/"
                               target="_blank"
                               rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </div>
                        <div className={'stackable'}>
                            <a className={'option-text backed-text'}
                               href="mailto:thomasyung@hotmail.co.uk">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }

};
