import React from 'react'

function Header() {
    return (
        <header className="header">
        <div className="header__main">
            <div className="header__search">
                <img src="" alt=""></img>
                <input type="text" placeholder="Search"></input>
            </div>
            <div className="header__nav">
                <div className="home">
                   <a href="/Home">
                    <img src="" alt=""></img>
                    home
                   </a>
                    
                </div>
                <div className="header__network">
                    <a href="/News"><img src="" alt=""></img>
                        news</a>
                </div>
                <div className="header__jobs">
                    <a href="#">
                        <img src="" alt=""></img>
                    Jobs
                    </a>
                </div>
                <div className="header__messaging">
                    <a href="#">
                        <img src="" alt=""></img>
                        Messaging
                    </a>
                </div>
                <div className="header__notifications">
                    <a href="#"> 
                        <img src="" alt=""></img>
                        Notifications
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
