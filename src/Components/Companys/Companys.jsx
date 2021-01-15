import React from 'react'; 
import Loading from '../Common/Loading';


    function Company(props) {
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

    function Companys(props) {
        
        if(props.companys.length === 0)
        {
            return <Loading />
        }
        debugger
        return (
            <div className="companys">
            <h1>
                Companys
            </h1>
            {
            props.companys.map(item => <Company name={item.name} descr={item.descr}/>)   
            } 
            </div>
        )
    }
  

export default Companys
