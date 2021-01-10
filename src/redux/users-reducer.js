const FOLLOW_USER = "FOLLOW_USER"; 
const UNFOLLOW_USER = "UNFOLLOW_USER"; 
const SET_USER = "SET_USER"; 
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"; 
const SET_TOTAL_COUNT = "GET_TOTAL_COUNT"; 
const SET_LOADING = "SET_LOADING"

let initialState = 
{
    users: 
    [      
    ], 
    pageSize: 5, 
    totalCount: 0, 
    currentValue: 1, 
    isFetching: true
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
            return {...state, users: action.users}; 
        }
        case SET_CURRENT_PAGE:
        {
            return {...state, currentValue: action.pageNumber}
        }
        case SET_TOTAL_COUNT: 
        {
            return {...state, totalCount: action.totalCount}
        }
        case SET_LOADING:
        {
            return {...state, isFetching: action.isFetching}
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

export const setCurrentPageActionCreator = (pageNumber) => 
{
    return {
        type: SET_CURRENT_PAGE, 
        pageNumber
    }
}

export const setTotalCountActionCreator = (item) => 
{
    return {
        type: SET_TOTAL_COUNT, 
        totalCount: item
    }
}

export const setLoadingActionCreator = (isFetching) =>
{
    return {
        type: SET_LOADING, 
        isFetching
    }
}

export default users_reducer; 