const updatePost = 'UPDATE-POST'; 
const addPost = 'ADD-POST';

let initialState =  {
    savePost:
  [
    {id:1, text: "Не стесняйся, скажи сколько?"}, 
    {id:2, text: "Не велика потеря"}
    ],
    newPost: ''
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
        default: return state; 
    }
}
export default post_reducer; 