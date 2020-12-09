import { drawPage } from "./render"; 
let state = {
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
}
    
}

export function addPost() 
{
  let id = 3; 
  let newPost = {
    id: id, 
    text: state.profilePage.newPost 
  };
  state.profilePage.savePost.push(newPost); 
  state.profilePage.newPost = ''; 
  drawPage(state); 
  id++; 
}

export function updatePost (item)
{
  state.profilePage.newPost = item; 
  drawPage(state); 
}

export default state ; 