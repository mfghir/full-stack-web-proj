import NextAuth from "next-auth/next"
// import Providers from "next-auth/providers";

import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  secret: process.env.AUTH_SECRET,

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};

export default NextAuth({ authOptions });

// export default NextAuth({
//   providers: [
//     Providers.Google({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],

// })
