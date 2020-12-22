import React from 'react'
import { NavLink } from 'react-router-dom'

function Messages() {
    return (
       <div className="messages"> 
       <div className="messages__wrapper">
            <div class='messages__dialogs'>
                <div className="messages__dialog">
                <img src="https://proprikol.ru/wp-content/uploads/2020/08/kartinki-kiberpank-32.jpg" alt=""/>
                <NavLink to="/Messages"><p>Артем Пананин</p></NavLink>
                </div>
                <div className="messages__dialog">
                <img src="https://proprikol.ru/wp-content/uploads/2020/08/kartinki-kiberpank-32.jpg" alt=""/>
                <NavLink to="/Messages"><p>Артем Пананин</p></NavLink>
                </div>
                <div className="messages__dialog">
                <img src="https://proprikol.ru/wp-content/uploads/2020/08/kartinki-kiberpank-32.jpg" alt=""/>
                <NavLink to="/Messages"><p>Артем Пананин</p></NavLink>
                </div>
                <div className="messages__dialog">
                <img src="https://proprikol.ru/wp-content/uploads/2020/08/kartinki-kiberpank-32.jpg" alt=""/>
                <NavLink to="/Messages"><p>Артем Пананин</p></NavLink>
                </div>
                <div className="messages__dialog">
                <img src="https://proprikol.ru/wp-content/uploads/2020/08/kartinki-kiberpank-32.jpg" alt=""/>
                <NavLink to="/Messages"><p>Артем Пананин</p></NavLink>
                </div>
                <div className="messages__dialog">
                <img src="https://proprikol.ru/wp-content/uploads/2020/08/kartinki-kiberpank-32.jpg" alt=""/>
                <NavLink to="/Messages"><p>Артем Пананин</p></NavLink>
                </div>
                <div className="messages__dialog">
                <img src="https://proprikol.ru/wp-content/uploads/2020/08/kartinki-kiberpank-32.jpg" alt=""/>
                <NavLink to="/Messages"><p>Артем Пананин</p></NavLink>
                </div>
            </div>
            <div className="messages__messages">
               
                
                <div className="messages__message">
                    <div className="messages__message__author">Артем</div>
                    <div className="messages__message__text">здорова</div>
                </div>
                <div className="messages__message">
                    <div className="messages__message__author">Артем</div>
                    <div className="messages__message__text">здорова</div>
                </div>
                <div className="messages__message">
                    <div className="messages__message__author">Артем</div>
                    <div className="messages__message__text">здорова</div>
                </div>
                <div className="messages__message">
                    <div className="messages__message__author">Артем</div>
                    <div className="messages__message__text">здорова</div>
                </div>
                <div className="messages__messages__input">
                <input type="text"/>
                <button>Отправить</button>
                </div>
                
            </div>
        </div>
        </div>
    )
}

export default Messages
