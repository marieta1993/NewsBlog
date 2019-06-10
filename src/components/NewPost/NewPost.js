import  React,{Component} from 'react';

import './NewPost.css';

export default  class NewPost extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                            <h2>New Post</h2>
                        </div>
                    </div>
                    <div className="row" >

                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-offset-3 " >
                            <form id="contact-form" className="form"  method="POST" >
                                <div className="form-group">
                                    <label className="form-label" htmlFor="name">Post Title</label>
                                    <input type="text" className="form-control" id="name" name="name"
                                           tabIndex="1" required/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="email">Post color</label>
                                    <input type="email" className="form-control" id="email" name="email"
                                           tabIndex="2" required/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="subject">Post status</label>
                                    <input type="text" className="form-control" id="subject" name="subject"
                                           tabIndex="3"/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="message">Post content</label>
                                    <textarea rows="5" cols="50" name="message" className="form-control" id="message"
                                              placeholder="Post content..." tabIndex="4" required/>
                                </div>
                                <div className="text-center">
                                    <input type="submit" className="btn btn-submit" value="Add post"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
};

