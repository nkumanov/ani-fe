import { baseApi } from "./api";
interface ILoginDto {
  data: {
    token: string;
  };
}
export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation<
      ILoginDto,
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
      onQueryStarted: async (arg, { queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          if (data) {
            localStorage.setItem("admin", data.data.token);
          }
        } catch (error) {}
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLoginUserMutation } = authApi;
