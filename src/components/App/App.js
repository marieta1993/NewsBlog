import React,{Component} from 'react';

import Header from '../Header';
import Home from '../Home';
import NewPost from '../NewPost';

import './App.css'

const newsList = [
    {id: "1", content: "Sport News", divColor: "#aff", status: true, title: "Football"},
    {id: "2", content: "Sport News", divColor: "#eda", status: true, title: "Baseball"},
    {id: "3", content: "Sport News", divColor: "#bad", status: false, title: "Basketball"},
    {id: "4", content: "Electronics News", divColor: "#dac", status: true, title: "iPod Touch"},
    {id: "5", content: "Electronics News", divColor: "#fba", status: false, title: "iPhone 5"},
    {id: "6", content: "Electronics News", divColor: "#0ab", status: true, title: "Nexus 7"}
];
export default class App extends Component{
    render() {

        return (

            <div>
                <Header/>
                <div className='container'>
                    <Home data={newsList}/>
                    <NewPost/>
                </div>
            </div>
        )
    }

};
