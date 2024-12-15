export const RoutesDefinition = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  PROFILE: "/profile",
  NEW_POST: "/new/post",
  POST: {
    route: "/post/:id",
    link: (id) => `/post:${id}`
  },
  FEED: "/feed"
};
