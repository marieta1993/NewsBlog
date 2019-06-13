import  React,{Component} from 'react';

import Article from '../Article';
import Filter from '../Filter';

import './Home.css'

export  default class Home extends Component{
render() {
    return (
        <>
            <h1 className='text-center'>SEARCH NEWS</h1>
            <Filter filterItemData={ this.props.filterItemData} />
            <Article newsList={this.props.data} />
        </>

    )
}


};
