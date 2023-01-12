import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn, me } from "../../../services/auth";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: "Sign in with Email",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {

                // const path = req.next
                /**
                 * This function is used to define if the user is authenticated or not.
                 * If authenticated, the function should return an object contains the user data.
                 * If not, the function should return `null`.
                 */
                if (credentials == null) return null;
                /**
                 * credentials is defined in the config above.
                 * We can expect it contains two properties: `email` and `password`
                 */
                try {
                    const { user, jwt } = await signIn({
                        email: credentials.email,
                        password: credentials.password,
                    });
                    const data = await me(jwt);
                    console.log(data);
                    user.id = data.id;
                    user.role = data.role.name;
                    user.name = data.username;
                    user.organizacao = data.organizacao;
                    user.departamento = data.departamento;
                    user.avatar = data.avatar;                    
                    return { ...user, jwt };
                } catch (error) {
                    // Sign In Fail
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        session: async ({ session, token }) => {
            session.id = token.id;
            session.jwt = token.jwt;
            session.user.role = token.role;
            session.user.name = token.name;
            session.user.id = token.id;
            session.user.organizacao = token.organizacao;
            session.user.departamento = token.departamento;
            session.user.avatar = token.avatar;              
            return Promise.resolve(session);
        },
        jwt: async ({ token, user }) => {
            const isSignIn = user ? true : false;
            if (isSignIn) {
                token.id = user.id;
                token.jwt = user.jwt;
                token.role = user.role;
                token.name = user.name;
                token.organizacao = user.organizacao;
                token.departamento = user.departamento;
                token.avatar = user.avatar;              
            }
            return Promise.resolve(token);
        },
    },
    pages: {
        signIn: "/auth/sign-in"
    }
});
