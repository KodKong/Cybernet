import React from 'react'; 


function Posts(props) {

  function Post(props) {
      return (<div className="main__post">
      <div className="post-avatar">
                 <a href="#"><img src="https://proprikol.ru/wp-content/uploads/2020/08/kartinki-kiberpank-32.jpg" alt=""></img></a>
              </div>
              <div className="main__post__text">
                  <div className="main__post__caption">
                      Lorem, ipsum
                  </div>
                  {props.text} 
              </div>
 
        </div>)
  }

  let statePosts = props.posts.profilePage.savePost.map(item => <Post text={item.text} />); 
    
    return (
    <div>
        {
          statePosts
        }
    </div>
                 
        
    )
}

export default Posts
