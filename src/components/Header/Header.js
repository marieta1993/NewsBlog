import  React,{Component} from 'react';

import './Header.css';

export default class Header extends Component{
    render(){
        return (
            <header>

                <nav className="navbar navbar-expand-lg navbar-dark default-color">
                    <strong>News Blog</strong>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                </nav>

            </header>
        )
    }
}


