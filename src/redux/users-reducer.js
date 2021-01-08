const FOLLOW_USER = "FOLLOW_USER"; 
const UNFOLLOW_USER = "UNFOLLOW_USER"; 
const SET_USER = "SET_USER"; 

let initialState = 
{
    users: 
    [
        {id: 1, fullName: "Finn Jordan", followed: true, status: "I love orange", location: {city: "Berlin", country: "Germany"}}, 
        {id: 2, fullName: "Kyrie James", followed: false, status: "I love apple", location: {city: "Berlin", country: "Germany"}}, 
        {id: 3, fullName: "Michel Harden", followed: true, status: "I love kiwi", location: {city: "Berlin", country: "Germany"}}, 
        {id: 4, fullName: "Dancan Herro", followed: true, status: "I love raspberry", location: {city: "Berlin", country: "Germany"}}        
    ]
}; 

const users_reducer = (state = initialState, action) => 
{
    switch(action.type)
    {
        case FOLLOW_USER:
        {
            return {...state, users: state.users.map(user => 
                {
                    if(user.id === action.userId)
                    {
                        return {...user, followed: true}
                    }
                    return user; 
                }) 
            }
             
        }
        case UNFOLLOW_USER:
        {
            return {...state, users: state.users.map(user => 
            {
                if(user.id === action.userId)
                {
                    return {...user, followed: false}
                }
                return user; 
            })}
        }
        case SET_USER: 
        {
            return {...state, users: [...state.users, ...action.users]}; 
        }
        default: return state; 
    }
}


export const followActionCreator = (userId) => 
{
    return {
        type: FOLLOW_USER, 
        userId
    }
}

export const unfollowActionCreator = (userId) =>
{
    return {
        type: UNFOLLOW_USER, 
        userId
    }
}

export const setUserActionCreator = (users) => 
{
    return {
        type: SET_USER, 
        users
    }
}

export default users_reducer; 