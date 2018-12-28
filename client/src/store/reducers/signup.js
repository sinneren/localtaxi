const initialState = {
    request: false,
}

const signup = (state = initialState, action) => {

    switch(action.type) {
        case 'SIGNUP_REQUEST':
            return {
                ...state,
                request: action.payload.request,
            }
        default:
            return state
    }
}
export default signup;