const updateMessage = 'UPDATE-MESSAGE'; 
const addMessage = 'ADD-MESSAGE'; 


const message_reducer = (state, action) => 
{

    switch(action.type)
    {
        case updateMessage: 
        {
            state.newMessage = action.newMessage; 
            return state; 
        }
        case addMessage: 
        {
            let id = 6; 
            let newMessage = {
            id: id, 
            text: state.newMessage 
            };
            state.messageStore.push(newMessage); 
            state.newMessage = ''; 
            id++; 
            return state; 
        }
        default: return state; 
    }
}



export default message_reducer; 