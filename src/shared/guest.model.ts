export type Attendee = {
  name: string;
  meal: Meal | null;
  alergy: string;
};
export type FormValues = {
  attend: Attend | null;
  notComingAttendee?: string;
  guestCount: string;
  guests: Attendee[];
};

export enum Attend {
  Comming = "comming",
  NotComming = "notComming",
}

export enum Meal {
  MEAT = "meat",
  VEGIE = "vegie",
}
