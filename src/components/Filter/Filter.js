import React,{Component} from 'react';

import  Search from '../Search';

import  './Filter.css';

export default class Filter extends Component{
    Hello (){
        console.log('hellooo')
    }
    render() {
        return (
            <div className='d-flex justify-content-between' >
                <Search/>
                <div className='d-flex justify-content-between col-sm-6'>
                    <input type="button" className="" value="Hot" onClick={() => {this.props.filterItemData('hot')}}/>
                    <input type="button" value="New" onClick={() => {this.props.filterItemData('new')}}/>
                    <input type="button" value="All" onClick={() => {this.props.filterItemData('all')}}/>
                </div>

            </div>
        )
    }
};
