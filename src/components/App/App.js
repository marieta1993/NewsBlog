import React,{Component} from 'react';

import Header from '../Header';
import Home from '../Home';
import NewPost from '../NewPost';

import './App.css'


export default class App extends Component{
     newsList = [
        {id: "1", content: "Sport News", divColor: "#aff", status: 'hot', title: "Football"},
        {id: "2", content: "Sport News", divColor: "#eda", status: 'hot', title: "Baseball"},
        {id: "3", content: "Sport News", divColor: "#bad", status: 'new', title: "Basketball"},
        {id: "4", content: "Electronics News", divColor: "#dac", status: 'hot', title: "iPod Touch"},
        {id: "5", content: "Electronics News", divColor: "#fba", status: 'new', title: "iPhone 5"},
        {id: "6", content: "Electronics News", divColor: "#0ab", status: 'hot', title: "Nexus 7"}
    ];
    state = {
         newsList:this.newsList
     };
    filterAction =(status,id) =>{
        this.setState(({newsList}) => {
            const updatedList = newsList.filter((obj)=>{
                if(status==='hot'){
                    return obj.status==='hot'
                }else if(status==='new'){
                    return obj.status==='new'
                }else{
                    return obj
                }
            });
            return{
                newsList:updatedList
            }
            }
        )
    };
    render() {
        let {newsList} =this.state;

        return (

            <>
                <Header/>
                <div className='container'>
                    <Home data={newsList} filterItemData={(id,status) => this.filterAction(id, status)} />
                    <NewPost/>
                </div>
            </>
        )
    }

};
