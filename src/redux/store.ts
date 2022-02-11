import { createStore } from 'redux';
import { devToolsEnhancerDevelopmentOnly } from '@redux-devtools/extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// root reducer
import rootReducer from './root';

// persistore config
const persistConfig = {
  key: 'todo-app',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, devToolsEnhancerDevelopmentOnly());
export const persistore = persistStore(store);

export default store;

// store types
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
