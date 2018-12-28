import { actionTypes } from '../actionTypes';

const initialState = {
    _id: null,
    userRequest: false,
}

const signup = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.SIGNUP_REQUEST:
            return {
                ...state,
                userRequest: action.payload.request,
            }
        case actionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                _id: action.payload._id,
                userRequest: action.payload.request,
            }
        case actionTypes.SIGNUP_FAIL:
            return {
                ...state,
                _id: null,
                userRequest: action.payload.request,
                errorMessage: action.payload.error_message,
            }
        default:
            return state
    }
}
export default signup;