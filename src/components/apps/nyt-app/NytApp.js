import React, { Component } from 'react';

export default class NytApp extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            search: '',
            startDate: '',
            endDate: '',
            pageNumber: 0,
            results: []
        };
    }
    
    render() {
        return ( 
            <div className="main">
                <div className="mainDiv">
                </div>
            </div>
        )
    }
}