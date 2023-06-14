import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import dbConnect from "../../../lib/dbConnect";
import userModel from "../../../models/userModel";
import decryptPassword from "../../../services/decrypt";

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Credentials({
      async authorize(credentials, req) {
        dbConnect();
        let { email, password } = credentials;
        try {
          let user = await userModel.findOne({ email: email });
          if (user) {
            let authenucatedUser = await decryptPassword(
              password,
              user.password
            );
            return { name: user.name, email: email };
          }
        } catch (err) {
          throw err;
        }
      },
    }),
  ],
});
