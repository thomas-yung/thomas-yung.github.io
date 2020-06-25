import React, {Component, Fragment} from 'react';
import '../Stylesheets/ProjectsPage.css';
import projects from '../Resources/projects';
import Overlay from "../Components/Overlay";
import ProjectCard from "../Components/ProjectCard";
import {NavLink} from "react-router-dom";

export default class ProjectPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            expanded: null
        };
    }

    toggleExpand = (project) => {
        const {expanded} = this.state;
        if (expanded && expanded.title === project.title) {
            this.setState({expanded: null});
        } else {
            this.setState({expanded: project});
        }
    };

    render() {
        return (
            <Fragment>
                {
                    this.state.expanded &&
                    <Overlay onClose={() => this.setState({expanded: null})}>
                        {
                            <ProjectCard project={this.state.expanded}
                                         onClick={() => {}}
                                         expanded={true}/>
                        }
                    </Overlay>
                }
                <p className={'projects-info'}>
                    <NavLink className={'projects-home-link'} to={'/'}>Click on any project to expand and <span style={{color: '#2ac9d4'}}>click here</span> to go home</NavLink>
                </p>
                {
                    projects.map(p => <ProjectCard project={p} key={p.title} onClick={this.toggleExpand.bind(this)}/>)
                }
                <div style={{paddingTop: '20px', backgroundColor: 'rgba(25, 25, 25, 0.8)'}} className={'projects-notable-mentions'}>
                    There are several projects undertaken as part of the course at Imperial College London worthy of note:
                    <ul>
                        <li className={'projects-notable-entry'}><b>Fuzzing Project:</b> (Fourth year of ICL) For the <i>Software Reliability</i> course, I implemented both smart and dumb fuzzers, aiming to test a SAT solver.</li>
                        <li className={'projects-notable-entry'}><b>Paxos:</b> (Third year of ICL) I implemented a working distributed implementation of the Paxos algorithm in <i>Elixir</i> as part of my <i>Distributed Algorithms</i> course.</li>
                        <li className={'projects-notable-entry'}><b>Neural Network Library:</b> (Third year of ICL) Along with 3 others, we wrote a neural network library in <i>Python</i> capable and used <i>Keras</i> for both classification and regression. This course also saw us implement decision trees for classification.</li>
                        <li className={'projects-notable-entry'}><b>WACC Compiler:</b> (Second year of ICL) Both a lexer and parser were written for WACC (a while-like language) in <i>Java</i> with the extension of compiler optimisations.</li>
                        <li className={'projects-notable-entry'}><b>PintOS:</b> (Second year of ICL) This coursework involved thread scheduling, low-level memory management (e.g. paging) and lots and lots of concurrency. Written in <i>C</i></li>
                        <li className={'projects-notable-entry'}><b>ARM Assembler and Emulator:</b> (First year of ICL) My team and I implemented an ARM11 assembler and emulator in <i>C</i>.</li>
                    </ul>
                </div>
            </Fragment>
        );
    }
};