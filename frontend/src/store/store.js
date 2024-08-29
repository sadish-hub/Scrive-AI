import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import CustomizerReducer from './customizer/CustomizerSlice';
import DocumentReducer from './apps/documents/DocumentsSlice';
import ChatsReducer from './apps/chats/ChatSlice';

const persistConfig = {
  key: 'root',
  storage,
};
export const store = configureStore({
  reducer: {
    customizer: persistReducer(persistConfig, CustomizerReducer),
    documentReducer: DocumentReducer,
    chatReducer: ChatsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }),
});

export const persistor = persistStore(store);
