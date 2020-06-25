import React, {Component} from 'react';
import '../Stylesheets/Components/ProjectCard.css';
import {IMAGES} from '../Resources/Images';

export default class ProjectCard extends Component {

    render() {
        const p = this.props.project;
        return (
            <div className={'project-card'} key={p.title} onClick={() => this.props.onClick(p)}>
                <h3 className={'project-title'}>{p.title}</h3>
                <h4 className={'project-subtitle'}>{p.subtitle}</h4>
                {
                    this.props.expanded ?
                        <img className={'project-image'} src={IMAGES.get(p.id)} alt={"Project cover"}/>
                        :
                        <div className={'project-image-wrapper'}>
                            <img className={'project-image'} src={IMAGES.get(p.id)} alt={"Project cover"}/>
                        </div>
                }
                <h4 className={'project-company'}>{p.company}</h4>
                <h4 className={'project-date'}>{p.date}</h4>
                {
                    p.stack.map(s => <div className={'project-stack-badge'} key={`${p.title}-${s}`}>{s}</div>)
                }
                <div className={'project-description-wrapper'}>
                    {
                        this.props.expanded &&
                        p.description.map((paragraph, i) => <p className={'project-description'} key={'p-' + i}>{paragraph}</p>)
                    }
                </div>
            </div>
        );
    }

}