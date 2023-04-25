import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { userLogin } from "./src/reducers/user-login";

const reducer = combineReducers({
    user_login: userLogin
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
)

export default store