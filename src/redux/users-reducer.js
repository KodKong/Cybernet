const FOLLOW_USER = "FOLLOW_USER"; 
const UNFOLLOW_USER = "UNFOLLOW_USER"; 
const SET_USER = "SET_USER"; 

let initialState = 
{
    users: 
    [      
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