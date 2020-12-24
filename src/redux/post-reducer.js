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
    switch(action.type)
    {
        case addPost: 
        {
            let id = 3; 
            let newPost = {
            id: id, 
            text: state.newPost 
            };
            state.savePost.push(newPost); 
            state.newPost = '';  
            id++; 
            return state; 
        }
        case updatePost: 
        {
            state.newPost = action.newPost;
            return state; 
        }
        default: return state; 
    }
}
export default post_reducer; 