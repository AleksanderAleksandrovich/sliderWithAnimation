import { Fact } from "shared/data/type";

export type DateEvent = {
  dateStart: string;
  dateEnd: string;
  facts: Fact[];
};
export type DateEventsSchema = {
  dateEvents: DateEvent[];
  current: number;
};
