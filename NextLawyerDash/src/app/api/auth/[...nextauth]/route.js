import connectToDB from "@/database";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId:
      "1038715734918-dushfcmem2679ois951jui5i1vhusmkb.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email } = user;
        try {
          await connectToDB();
          const isUserExists = await User.findOne({ email });

          if (!isUserExists) {
            const res = await fetch("http://localhost:3000/api/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name, email }),
            });

            if (res.success) {
              return user;
            }
          }
        } catch (error) {
          console.log(error);
        }
      }

      return user;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
