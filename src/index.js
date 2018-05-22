import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

//components
import JSON from './db.json';

import Header from './components/header';
import NewsList from './components/news_list';  

class App extends Component{
 
    state = {
        news:JSON
    }

    render(){

        return (
            <div>
            <Header/>
            <NewsList news={this.state.news}>
             <h2>The news are </h2>
            </NewsList>
            </div>
        )
    }
   
}

ReactDOM.render(<App/>,document.querySelector('#root'));

