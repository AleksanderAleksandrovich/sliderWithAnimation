import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./stateSchema";
import { dateEventsReducer } from "features/SlideEvents";

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    dateEvents: dateEventsReducer,
  };
  return configureStore<StateSchema>({
    reducer: rootReducer,
    // devTools: __IS_DEV__,
    // preloadedState: initialState,
  });
};
