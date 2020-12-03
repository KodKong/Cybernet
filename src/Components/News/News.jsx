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


export default function News(props) {
    return (
        <div className="main__news">  
            {
                props.dataNews.hotNew.map(item => <HotNew title={item.title} 
                    description={item.description}
                    img={item.img}
                    />)
            }
         <div className="main__news__last">
            {
               props.dataNews.news.map(item => <New title={item.title} 
                description={item.description} 
                img={item.img}
                />)
            }
         </div>
     </div>
    )
}
