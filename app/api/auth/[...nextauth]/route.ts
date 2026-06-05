import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@/lib/mongodb";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],

    callbacks: {
        async signIn({ user }) {
            try {
                console.log("User:", user);

                const db = await connectDB();

                console.log("MongoDB connected");

                const existingUser = await db
                    .collection("users")
                    .findOne({ email: user.email });

                console.log("Existing user:", existingUser);

                if (!existingUser) {
                    await db.collection("users").insertOne({
                        name: user.name,
                        email: user.email,
                        image: user.image,
                        provider: "google",
                        createdAt: new Date(),
                    });

                    console.log("User inserted");
                }

                return true;
            } catch (error) {
                console.error("SIGNIN ERROR:", error);
                return false;
            }
        },
    },
});

export { handler as GET, handler as POST };