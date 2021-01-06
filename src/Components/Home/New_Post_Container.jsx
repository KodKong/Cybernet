import React from 'react'
import New_Post from "./New_Post";
import { addPostActionCreator, updatePostActionCreator } from "../../redux/state";
import StoreContext from '../../StoreContext';


function New_Post_Container() {

    return (
        <StoreContext.Consumer>
        {
            (store) => 
            {

                let addPost = () => {
                    store.dispatch(addPostActionCreator());  
                }; 
            
                let updatePost = (text) => 
                {
                    let action = updatePostActionCreator(text); 
                    store.dispatch(action); 
                }; 

                return <New_Post updatePostText={updatePost} addPost={addPost} posts={store.posts}></New_Post>
        
            }

        }
       </StoreContext.Consumer>
    )
}

export default New_Post_Container; 
