import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
        <div className="header__main">
            
            <div className="header__nav">
                <div className="home">
                   <NavLink to="/Home">
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
                    
                    <NavLink to="/Users"><img src="" alt=""></img>
                        Пользователи</NavLink>
                    
                </div>
                <div className="header__profile-header">
                <NavLink to="/Profile">
                        <img src="" alt=""></img>
                        Profile
                        </NavLink>
                </div>
            </div>
        </div>
        <div className="header__bacground">

        </div>
    </header>
    )
}

export default Header
