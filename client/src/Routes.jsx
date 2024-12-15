export const RoutesDefinition = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  PROFILE: "/profile",
  POST: {
    route: "/post/:id",
    link: (id) => `/post:${id}`
  },
  FEED: "/feed"
};
