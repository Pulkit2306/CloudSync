import * as types from "../actionTypes/authActionTypes"

const initialState = {
    isAuthenticated: false,
    user: {},
};

const authReducer = (state = initialState, action) => { 
    switch(action.type){
        case types.Sign_In:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            };
        case types.Sign_Out:
            return{
                ...state,
                isAuthenticated: false,
                user: {},
            }
        default:
            return state;
    }
}

export default authReducer;