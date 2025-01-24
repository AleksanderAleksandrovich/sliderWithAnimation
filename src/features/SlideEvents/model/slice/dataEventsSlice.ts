import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DateEventsSchema } from "../types/dateEventsSchema";
import { data } from "shared/data/data";

const initialState: DateEventsSchema = {
  dateEvents: data,
  current: 0,
};

export const dateEventsSlice = createSlice({
  name: "dateEvents",
  initialState,
  reducers: {
    nextDateInterval: (state) => {
      if (state.dateEvents.length - 1 > state.current) {
        state.current += 1;
      }
    },
    prevDateInterval: (state) => {
      if (0 < state.current) {
        state.current -= 1;
      }
    },
  },
});

export const { actions: dateEventsActions } = dateEventsSlice;
export const { reducer: dateEventsReducer } = dateEventsSlice;
