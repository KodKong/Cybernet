const updatePost = 'UPDATE-POST'; 
const addPost = 'ADD-POST';
const SET_USER_PROFILE = "SET_USER_PROFILE"; 
const SET_USER_STATUS = "SET_USER_STATUS"; 
const UPDATE_USER_STATUS = "UPDATE_USER_STATUS";

let initialState =  {
    savePost:
  [
    {id:1, text: "Не стесняйся, скажи сколько?"}, 
    {id:2, text: "Не велика потеря"}
    ],
    newPost: '', 
    profile: null, 
    ownerPage: 
    {
      fullName: "Henry Dorsett Case",
      photos: "https://proprikol.ru/wp-content/uploads/2020/08/kartinki-kiberpank-32.jpg",
      status: "I love orange",
      location: {"city": "Tokyo", "country": "Japan"}
    }
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

          return {...state, newPost: action.newPost}
        }
        case SET_USER_PROFILE: 
        {
          return {...state, profile: action.profile}
        }
        case SET_USER_STATUS:
        {
          debugger
            return {...state, ...state.ownerPage.status, status: action.status}
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

  export const setUserStatus = (status) => 
  {
    return {type: SET_USER_STATUS, status}
  }

  // export const updateUserStatus = (status) => 



export default post_reducer; 