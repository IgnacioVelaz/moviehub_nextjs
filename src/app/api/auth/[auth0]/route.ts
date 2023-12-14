import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

// eslint-disable-next-line import/prefer-default-export
export const GET = handleAuth({
  login: handleLogin({
    authorizationParams: {
      audience: "http://localhost:8081",
    },
    returnTo: "/add",
  }),
});
