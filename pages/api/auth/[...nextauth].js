import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import axiosInstance from "../../../utils/axiosInstance";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "yagnesh.modh@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password1!",
        },
      },
      async authorize(credentials, req) {
        try {
          const res = await axiosInstance.post("login", credentials);
          console.log("res.data", res.data);
          return { ...res.data.user, access_token: res.data.accessToken };
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    newUser: "/register",
  },
});
