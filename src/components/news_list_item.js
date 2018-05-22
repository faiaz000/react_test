import React from 'react';
//import {css} from 'glamor';
import classes from '../css/styles.css'

const NewsItem =(props)=>{

  
    return(
        <div>
        <h3>{props.item.title}</h3>
        <div>{props.item.feed}</div>

        </div>
    )

}
 
export default NewsItem;
