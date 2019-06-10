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
                    <input type="button" className="" value="Hot" onClick={() => {this.Hello()}}/>
                    <input type="button" value="New" onClick={() => {this.Hello()}}/>
                    <input type="button" value="All" onClick={() => {this.Hello()}}/>
                </div>

            </div>
        )
    }
};
