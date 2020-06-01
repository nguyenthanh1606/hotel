import React, { Component } from 'react';
import loadingGif from '../images/gif/loading-arrow.gif';

class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <h4>rooms data loading...</h4>
                <img src={loadingGif} alt=""/>
            </div>
        );
    }
}

export default Loading;
