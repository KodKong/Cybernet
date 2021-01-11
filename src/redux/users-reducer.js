const FOLLOW_USER = "FOLLOW_USER"; 
const UNFOLLOW_USER = "UNFOLLOW_USER"; 
const SET_USER = "SET_USER"; 
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"; 
const SET_TOTAL_COUNT = "GET_TOTAL_COUNT"; 
const SET_LOADING = "SET_LOADING"
const SET_USER_PAGE = "SET_USER_PAGE"

let initialState = 
{
    users: 
    [      
    ], 
    pageSize: 5, 
    totalCount: 0, 
    currentValue: 1, 
    isFetching: true,
    userPage: 0
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
        case SET_USER_PAGE: 
        {
            return {...state, userPage: action.userPage}      
        }
        default: return state; 
    }
}


export const followAC = (userId) => 
{
    return {
        type: FOLLOW_USER, 
        userId
    }
}

export const unfollowAC = (userId) =>
{
    return {
        type: UNFOLLOW_USER, 
        userId
    }
}

export const setUsersAC = (users) => 
{
    return {
        type: SET_USER, 
        users
    }
}

export const setCurrentPageAC = (pageNumber) => 
{
    return {
        type: SET_CURRENT_PAGE, 
        pageNumber
    }
}

export const setTotalCountAC = (item) => 
{
    return {
        type: SET_TOTAL_COUNT, 
        totalCount: item
    }
}

export const setLoadingAC = (isFetching) =>
{
    return {
        type: SET_LOADING, 
        isFetching
    }
}

export const setUserPageAC = (userPage) => 
{
    return {
        type: SET_USER_PAGE, 
        userPage
    }
}

export default users_reducer; 