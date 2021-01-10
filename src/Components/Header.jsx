import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
        <div className="header__main">
            
            <div className="header__nav">
                <div className="home">
                   <NavLink to="/Profile">
                    <img src="" alt=""></img>
                    Главная
                   </NavLink>
                    
                </div>
                <div className="header__network">
                    <NavLink to="/News"><img src="" alt=""></img>
                        Новости</NavLink>
                </div>
                <div className="header__messaging">
                <NavLink to="/Messages"><img src="" alt=""></img>
                        Сообщения</NavLink>
                </div>
                <div className="header__notifications">
                    <a href="#"> 
                    <NavLink to="/Users"><img src="" alt=""></img>
                        Пользователи</NavLink>
                    </a>
                </div>
                <div className="header__profile-header">
                    <a href="#">
                        <img src="" alt=""></img>
                        Profile
                    </a>
                </div>
            </div>
        </div>
        <div className="header__bacground">

        </div>
    </header>
    )
}

export default Header
