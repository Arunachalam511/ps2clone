import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './userActions';
import signupReducer from "../Signupaction/Signupslice"


const persistConfig = {
  key: 'userInfo',
  storage,
};
const signupConfig = {
  key: "RegisteredUsers",
  storage,
};


const persistedReducer = persistReducer(persistConfig, userReducer);
const SignUpReducer = persistReducer(signupConfig, signupReducer);


const rootReducer = combineReducers({
  user: persistedReducer,
  registeredUsers: SignUpReducer,
});


const store = configureStore({
  reducer: rootReducer,
});


const persistor = persistStore(store);


export type RootState = ReturnType<typeof rootReducer>;

export { store, persistor };
