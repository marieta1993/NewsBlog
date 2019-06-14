import React,{Component} from 'react';

import  Search from '../Search';

import  './Filter.css';

export default class Filter extends Component{

    render() {
        return (
            <div className='d-flex justify-content-between' >
                <Search searchItemData ={this.props.searchItemData}/>
                <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary" onClick={() => {this.props.filterItemData('hot')}}>Hot</button>
                    <button type="button" className="btn btn-secondary" onClick={() => {this.props.filterItemData('new')}}>New</button>
                    <button type="button" className="btn btn-secondary"   onClick={() => {this.props.filterItemData('all')}}>All</button>
                </div>

            </div>
        )
    }
};
