import { actionTypes } from './actionTypes';

const initialState = {
    _id: null,
    email: null,
    userRequest: false,
    errorMessage: '',
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_REQUEST:
            return {
                ...state,
                userRequest: action.payload.request,
            }
        case actionTypes.USER_SUCCESS:
            return {
                ...state,
                _id: action.payload._id,
                email: action.payload.email,
                userRequest: action.payload.request,
            }
        case actionTypes.USER_FAIL:
            return {
                ...state,
                userRequest: action.payload.request,
                errorMessage: action.payload.error_message,
            }
        default:
            return state
    }
}
export default user;
