import post_reducer from "./post-reducer";
import message_reducer from "./message-reducer";
const updatePost = 'UPDATE-POST'; 
const addPost = 'ADD-POST';
const updateMessage = 'UPDATE-MESSAGE'; 
const addMessage = 'ADD-MESSAGE'; 
let store = {
  _state: {
    newsPage: {
      hotNew:  [{
          title: "Человеки пауки ограбили банк", 
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem cupiditate t", 
          img: "https://vokrug.tv/pic/news/c/7/f/8/c7f8b6209c96e2c3252630a28f8b02a1.jpg"
          }], 
      news: [{
          title: "Новости из Intel", 
          description: "Intel продолжит вкладывать средства в собственный 7-нм техпроцесс, а также планирует освоит 5-нм и 3-нм технологии", 
          img: "https://i.playground.ru/p/qUgPS4hXe9FPHKg52s58TQ.jpeg"
        }, 
        {
          title: "Доктор через экран", 
          description: "«Сбер» запустил онлайн-сервис постановки диагноза при помощи искусственного интеллекта", 
          img: "https://www.sberbank.ru/portalserver/static/templates/%5BBBHOST%5D/RuMasterpageTemplate/static/social-ru.png"
        }]   
}, 
    profilePage: 
{
  savePost:
[
  {id:1, text: "Не стесняйся, скажи сколько?"}, 
  {id:2, text: "Не велика потеря"}
  ],
  newPost: ''
}, 
messagesStore: {
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
},
  },
 

  getState () 
  {
    return this._state; 
  },

  subscribe (subscriber)
  {
  this.drawPage = subscriber; 
  }, 

  drawPage: () => {
    console.log("f");
  }, 


  

  dispatch(action)
  {
     this._state.profilePage = post_reducer(this._state.profilePage, action); 
     this._state.messagesStore = message_reducer(this._state.messagesStore, action); 
     this.drawPage(this._state);
     

  },

}

export default store; 

  export const addPostActionCreator = () => 
  {
    return {type: addPost}; 
  }

  export const updatePostActionCreator = (textPost) => 
  {
    return {type: updatePost, newPost: textPost}; 
  }

  export const updateMessageActionCreator = (text) =>
  {
    return {type: updateMessage, newMessage: text}
  }

  export const addMessageActionCreator = () =>
  {
    return {type: addMessage}
  }