import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./stateSchema";
import { dateEventsReducer } from "entities/EventsModel";


export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    dateEvents: dateEventsReducer,
  };
  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: true,
  });
};
