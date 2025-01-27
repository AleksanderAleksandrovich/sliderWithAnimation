export type Fact = {
  title: string;
  description: string;
  id: number;
};
export type DateEvent = {
  dateStart: string;
  title?: string;
  dateEnd: string;
  facts: Fact[];
};
