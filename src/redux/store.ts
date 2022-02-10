import { createStore } from 'redux';
import { devToolsEnhancerDevelopmentOnly } from '@redux-devtools/extension';

// root reducer
import rootReducer from './root';

const store = createStore(rootReducer, devToolsEnhancerDevelopmentOnly());

export default store;

// store types
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
