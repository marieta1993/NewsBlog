import React, {Component} from 'react';

import './Article.css';

export default class Article extends Component {
     statusDiv =(item)=>{
         if (item.status === 'hot'){
             return(
                 <span className="badge badge-pill badge-danger">Hot</span>
             )
         }else{
             return(
                <span className="badge badge-pill badge-warning">New</span>
             )
         }
    };

    render() {
        let newsList = this.props.newsList.map((item) =>
                <div className="card" key={item.id}>

                    <div className="card-body" >
                        {this.statusDiv(item)}
                        <div className="card-title news_header">
                            <h1>  {item.title}</h1>
                        </div>
                        <div className="card-text news_content">
                            <p>{item.content}</p>
                        </div>
                        <div className="row ">
                            <div className="col-6 text-center">
                                <i className="fa fa-pencil-square-o" aria-hidden="true"/>
                            </div>
                            <div className="col-6 text-center">
                                <i className="fa fa-trash" aria-hidden="true"/>
                            </div>

                        </div>

                    </div>
                </div>
            );
        return (
            <div className='d-flex justify-content-between flex-wrap'>
                {newsList}
            </div>
        )
    }
}
