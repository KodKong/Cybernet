import React from 'react'

export default function Company(props) {
    return (
        <div className="companys__descr">
                    <img src="img/tasuba.jpg" alt=""></img>
                    <div className="company-descr">
                    <a href="#">{props.name}</a> 
                       <div className="companys__descr__text">
                       {props.descr}
                       </div>
                    </div>
        </div>
    )
}
