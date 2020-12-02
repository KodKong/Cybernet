import React from 'react'

function New(props) {
    return (
        <div className="main__news__last__new">
            <img src={props.img} alt=""/>
             <div className="descr">
             <a href=""><h1>{props.title}</h1>
                  {props.description}
                  </a>
             </div>
             
             
        </div>
    )
}

export default New
