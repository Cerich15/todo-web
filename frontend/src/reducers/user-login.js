import { USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../actions/type";

const initialState = {}
const userLogin = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true }
        case USER_LOGIN_SUCCESS:
            return { loading: false, user_info: action.payload }
        case USER_LOGIN_FAILED:
             return { loading: false, user_info: action.payload }
        case USER_LOGOUT:
             return initialState
        default:
            return state
    }
}

export { userLogin }