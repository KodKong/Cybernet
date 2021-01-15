const GET_COMPANYS = "GET_COMPANYS"; 

const initialState = {
    companys: []
}; 

const companys_reducer = (state = initialState, action) =>
{
    switch (action.type)
    {
        case GET_COMPANYS:
        {
            return {...state, companys: action.companys}
        }
        default: return state; 
    }
}

export const getCompanysAC = (companys) => 
{
    return {
        type: GET_COMPANYS, 
        companys
    }
}

export default companys_reducer; 