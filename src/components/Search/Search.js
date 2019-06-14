import React,{Component} from 'react';

import  './Search.css';

export  default class Search extends Component{
    render() {
        return (
            <div className="form-group col-sm-6">
                <form className="form-inline md-form form-sm active-cyan-2 mt-2">
                    <input className="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
                           aria-label="Search" onChange={this.props.searchItemData}/>
                    <i className="fa fa-search" aria-hidden="true"/>
                </form>
            </div>

        )
    }
};
