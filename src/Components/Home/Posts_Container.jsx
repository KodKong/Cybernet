import React from 'react'; 
import Posts from "./Posts";
import { connect } from "react-redux";



// function Posts_Container() {

//   function Post(props) {
//       return (<div className="main__post">
//       <div className="post-avatar">
//                  <a href="#"><img src="https://proprikol.ru/wp-content/uploads/2020/08/kartinki-kiberpank-32.jpg" alt=""></img></a>
//               </div>
//               <div className="main__post__text">
//                   <div className="main__post__caption">
//                       Lorem, ipsum
//                   </div>
//                   {props.text} 
//               </div>
 
//         </div>)
//   }

//   let statePosts = props.posts.profilePage.savePost.map(item => <Post text={item.text} />); 
    
//     return (
//     <div>
//         {
//           statePosts
//         }
//     </div>
                 
        
//     )
// }
let mapStateToProps = (state) => {
  
  return {
      posts: state.profilePage
  }
}

const Posts_Container = connect(mapStateToProps)(Posts); 


export default Posts_Container
