import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import studentReducer from "./features/student/studentSlice"
import authReducer from "./features/auth/authSlice"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    userReducer,
    studentReducer,
    authReducer
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
})
const persistor = persistStore(store)
export { persistor, store };