const updatePost = 'UPDATE-POST'; 
const addPost = 'ADD-POST';
const SET_USER_PROFILE = "SET_USER_PROFILE"; 

let initialState =  {
    savePost:
  [
    {id:1, text: "Не стесняйся, скажи сколько?"}, 
    {id:2, text: "Не велика потеря"}
    ],
    newPost: '', 
    profile: null
  }; 

const post_reducer = (state = initialState, action) =>
{
    let stateCopy = {...state}; 
    stateCopy.savePost = [...state.savePost]; 

    switch(action.type)
    {
        case addPost: 
        {
            let id = 3; 
            let newPost = {
            id: id, 
            text: stateCopy.newPost 
            };
            stateCopy.savePost.push(newPost); 
            stateCopy.newPost = '';  
            id++; 
            return stateCopy; 
        }
        case updatePost: 
        {
            stateCopy.newPost = action.newPost;
            return stateCopy; 
        }
        case SET_USER_PROFILE: 
        {
          return {...state, profile: action.profile}
        }
        default: return state; 
    }
}

export const addPostActionCreator = () => 
  {
    return {type: addPost}; 
  }

  export const updatePostActionCreator = (textPost) => 
  {
    return {type: updatePost, newPost: textPost}; 
  }

  export const setUserProfile = (profile) => 
  {
    return {type: SET_USER_PROFILE, profile}
  }
export default post_reducer; 