import React from 'react'

function HotNew(props) {
    return (
        <div className="main__news__last" id="hot__news">
            <img src={props.img} alt=""/>
           <div className="descr">
            <h1>{props.title}</h1>
                {props.description}
                  
             </div> 
        </div>
    )
}

export default HotNew
