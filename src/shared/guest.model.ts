export type Attendee = {
  name: string;
  meal: Meal | null;
  alergy: string;
};
export type FormValues = {
  attend: GuestComming | null;
  notComingAttendee?: string;
  guestCount: string;
  guests: Attendee[];
};

export enum GuestComming {
  Comming = "comming",
  NotComming = "notComming",
}

export enum Meal {
  MEAT = "meat",
  VEGIE = "vegie",
}
