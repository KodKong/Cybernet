const updateMessage = 'UPDATE-MESSAGE'; 
const addMessage = 'ADD-MESSAGE'; 


let initialState = {
    dialogsStore: [
      {
        id: 1, name: "Garry", avatar: "https://secureservercdn.net/198.71.233.51/3nw.43d.myftpupload.com/wp-content/uploads/2020/08/Caruso-1.png"
      }, 
      {
        id: 2, name: "Paul", avatar: "https://cdn.vox-cdn.com/thumbor/fCzD8UK6LfjewKWOCwd6AXel9Xo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21967491/CP3xLakers.jpg"
      },
      {
        id: 3, name: "Rikki", avatar: "https://assets-cms.thescore.com/uploads/image/file/388892/w640xh480_GettyImages-1193165118.jpg?ts=1578424916"
      }
    ], 
    messageStore: [
      {
        id:1, text: "Привет", name: "Paul"
      }, 
      {
        id:2, text: "Как дела", name: "Вы"
      }, 
      {
        id:3, text: "Хорошо", name: "Paul"
      }, 
      {
        id:4, text: "У тебя как?", name: "Paul"
      }, 
      {
        id:5, text: "Нормально", name: "Вы"
      }, 
    ], 
    newMessage: ''
  }; 

const message_reducer = (state = initialState, action) => 
{

    let stateCopy = {...state}; 
    stateCopy.dialogsStore = [...state.dialogsStore]; 
    stateCopy.messageStore = [...state.messageStore]; 

    switch(action.type)
    {
        case updateMessage: 
        {
            stateCopy.newMessage = action.newMessage; 
            return stateCopy; 
        }
        case addMessage: 
        {
            let id = 6; 
            let newMessage = {
            id: id, 
            text: stateCopy.newMessage 
            };
            stateCopy.messageStore.push(newMessage); 
            stateCopy.newMessage = ''; 
            id++; 
            return stateCopy; 
        }
        default: return state; 
    }
}

export const updateMessageActionCreator = (text) =>
  {
    return {type: updateMessage, newMessage: text}
  }

  export const addMessageActionCreator = () =>
  {
    return {type: addMessage}
  }

export default message_reducer; 