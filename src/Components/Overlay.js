import React, {Component} from 'react';
import '../Stylesheets/Components/Overlay.css';

export default class Overlay extends Component {

    render() {
        return (
            <div className={'overlay-page'} onClick={this.props.onClose}>
                <div className={'overlay-dialog'} onClick={(e) => {e.stopPropagation()}}>
                    <div className={'overlay-close'} onClick={() => this.props.onClose()}>X</div>
                    {
                        this.props.children
                    }
                </div>
            </div>
        );
    }

}