import React from 'react'; 

function Post(text) {
    return (
            <div className="main__post">
            <div className="post-avatar">
                       <a href="#"><img src="https://proprikol.ru/wp-content/uploads/2020/08/kartinki-kiberpank-32.jpg" alt=""></img></a>
                    </div>
                    <div className="main__post__text">
                        <div className="main__post__caption">
                            Lorem, ipsum
                        </div>
                        {text.text} 
                    </div>
       
       </div>
            
    ); 
}

export default Post
