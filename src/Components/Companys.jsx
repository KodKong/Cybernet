import React from 'react'

function Companys() {
    return (
        <div className="companys">
                <h1>
                    Companys
                </h1>
                <div className="companys__descr">
                    <img src="img/tasuba.jpg" alt=""></img>
                    <div className="company-descr">
                      <a href="#">Tasuba</a> 
                       <div className="companys__descr__text">
                        Компания, производитель электромобилей 
                       </div>
                    </div>
                </div>
                <div className="companys__descr">
                    <img src="img/kalashnikov.png" alt=""></img>
                    <div className="company-descr">
                      <a href="#">Kalashnikov</a> 
                       <div className="companys__descr__text">
                        Холдинг по производству военного оружия 
                       </div>
                    </div>
                </div>
                <div className="companys__descr">
                    <img src="img/kibernetica.jpg" alt=""></img>
                    <div className="company-descr">
                      <a href="#">Syberdet</a> 
                       <div className="companys__descr__text">
                        Производство кибернетических протезов 
                       </div>
                    </div>
                </div>
                <div className="companys__descr">
                    <img src="img//fightdogs.png" alt=""></img>
                    <div className="company-descr">
                      <a href="#">Fight Doggs</a> 
                       <div className="companys__descr__text">
                        Частное охранное предприятие 
                       </div>
                    </div>
                </div>
            </div>
    )
}

export default Companys
