const updateMessage = 'UPDATE-MESSAGE'; 
const addMessage = 'ADD-MESSAGE'; 


let initialState = {
    dialogsStore: [
      {
        id: 1, name: "Артем", avatar: ""
      }, 
      {
        id: 2, name: "Лобанов", avatar: "https://memepedia.ru/wp-content/uploads/2019/06/lobanov-mem-shablon.jpg"
      },
      {
        id: 3, name: "Быков", avatar: ""
      },
      {
        id: 4, name: "Кисегач", avatar: ""
      },
      {
        id: 5, name: "Романенко", avatar: ""
      },
      {
        id: 6, name: "Левин", avatar: ""
      },
      {
        id: 7, name: "Купитман", avatar: ""
      }
    ], 
    messageStore: [
      {
        id:1, text: "Привет", name: "Артем"
      }, 
      {
        id:2, text: "Как дела", name: "Вы"
      }, 
      {
        id:3, text: "Хорошо", name: "Артем"
      }, 
      {
        id:4, text: "У тебя как?", name: "Артем"
      }, 
      {
        id:5, text: "Нормально", name: "Артем"
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



export default message_reducer; 