import { baseApi } from "./api";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation<
      { user: any },
      { username: string; password: string }
    >({
      query: (credentials) => ({
        url: "user/auth/signin",
        method: "POST",
        body: credentials,
        meta: {
          requestName: "Login request",
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLoginUserMutation } = authApi;
