import { actionTypes } from './actionTypes';

const initialState = {
    _id: null,
    userRequest: false,
    errorMessage: '',
}

const signin = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.SIGNIN_REQUEST:
            return {
                ...state,
                userRequest: action.payload.request,
            }
        case actionTypes.SIGNIN_SUCCESS:
            return {
                ...state,
                _id: action.payload._id,
                userRequest: action.payload.request,
            }
        case actionTypes.SIGNIN_FAIL:
            return {
                ...state,
                userRequest: action.payload.request,
                errorMessage: action.payload.error_message,
            }
        case actionTypes.SIGNIN_WRONG_DATA:
            return {
                ...state,
                _id: action.payload._id,
                userRequest: action.payload.request,
                errorMessage: action.payload.error_message,
            }
        default:
            return state
    }
}
export default signin;