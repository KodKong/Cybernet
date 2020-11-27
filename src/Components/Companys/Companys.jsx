import React from 'react'; 
import Company from './Company'

function Companys() {
    return (
        <div className="companys">
                <h1>
                    Companys
                </h1>
                <Company name="Tasuba" descr="Компания, производитель электромобилей"/>
                <Company name="Kalashnikov" descr="Холдинг по производству военного оружия"/>
                <Company name="Syberdet" descr="Производство кибернетических протезов "/>
                <Company name="Fight Doggs" descr="Частное охранное предприятие "/>
            </div>
    )
}

export default Companys
