import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
//import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../lib/prisma"

const authOptions = {
    callbacks: {
        async jwt({ token, account }) {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.
            session.accessToken = token.accessToken
            return session
        }
    },
    pages: {
        signIn: "/auth/login",
        // error: '/auth/error',
        signOut: '/auth/signout'
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "username" },
                password: { label: "Password", type: "password" }
            },
            authorize(credentials, req) {
                // perform you login logic
                // find out user from db
                if (credentials.email !== "admin@admin.com" || password !== "123") {
                    throw new Error("invalid credentials");
                }

                // if everything is fine
                return {
                    id: "1",
                    name: "admin",
                    email: "admin@admin.com",
                    role: "admin",
                };
            },
        }),
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions)