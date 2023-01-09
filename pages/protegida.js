import { withAuth } from "../services/auth"
import Head from "next/head";

export default function Protegida () {
    return (
        <>
            <Head>
                <title>Strapi - Next -- NextAuth</title>
            </Head>
            <h1>Protected Page - Only Admins</h1>
        </>
    )
}

export const getServerSideProps = withAuth;