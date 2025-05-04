import { Attend, Attendee, Meal } from "../../shared/guest.model";
import { baseApi } from "./api";

export const guestApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllGuests: builder.query<
      {
        _id: string;
        name: string;
        attend: Attend;
        meal?: Meal;
        alergy?: string;
      }[],
      void
    >({
      query: () => ({
        url: "guests/all",
      }),
    }),
    addNewGuest: builder.mutation<
      { user: any },
      {
        userData: { attend: Attend; name?: string; guests?: Attendee[] };
        location: string;
      }
    >({
      query: ({ userData, location }) => ({
        url: "guests",
        method: "POST",
        body: userData,
        meta: {
          requestName: "Add new guest",
        },
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          if (arg.location !== "admin") {
            localStorage.setItem("userAnswer", "true");
          }
        } catch (error) {}
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllGuestsQuery, useAddNewGuestMutation } = guestApi;
