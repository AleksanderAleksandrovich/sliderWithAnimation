import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DateEventsSchema } from "../types/dateEventsSchema";
import { data } from "shared/data/data";

const initialState: DateEventsSchema = {
  dateEvents: data,
};

export const dateEventsSlice = createSlice({
  name: "dateEvents",
  initialState,
  reducers: {},
});

export const { actions: dateEventsActions } = dateEventsSlice;
export const { reducer: dateEventsReducer } = dateEventsSlice;
