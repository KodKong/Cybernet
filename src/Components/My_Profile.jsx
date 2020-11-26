import React from 'react'; 

function My_Profile() {
    return (
        <div className="main__profile_info">
                <div className="main__avatar">
                    <img src="https://proprikol.ru/wp-content/uploads/2020/08/kartinki-kiberpank-32.jpg" alt=""></img>
                </div>
                <div className="main__info">
                <div className="main__name">
                    Henry Dorsett Case
                </div>
                <div className="main__company_list">
                    Company:  
                    <div className="main__company">
                       Bokris
                    </div>
                </div>
                <div className="buttons-link">
                    <button>Подписаться</button>
                    <button>Связаться</button>
                </div>
            </div>
            </div>
    )
}

export default My_Profile
