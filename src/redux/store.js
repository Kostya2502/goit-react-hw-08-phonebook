// import { configureStore } from '@reduxjs/toolkit';
// import mainReducer from "./reducers";

// const store = configureStore({ reducer: { contacts: mainReducer } })

// export default store;

// =============================================================
import { configureStore } from '@reduxjs/toolkit';
import mainReducer from "./reducers";
import {
    persistStore,
    persistReducer
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authReducer';

const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["email", "idToken", "refreshToken", "isAuth"],
};
const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: (mainReducer),
    }
});

const persistor = persistStore(store);

export { store, persistor };


