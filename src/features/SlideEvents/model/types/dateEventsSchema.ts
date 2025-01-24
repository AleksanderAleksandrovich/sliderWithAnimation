type Fact = {
  title: string;
  description: string;
};

export type DateEvent = {
  dateStart: string;
  dateEnd: string;
  facts: Fact[];
};
export type DateEventsSchema = {
  dateEvents: DateEvent[];
};
