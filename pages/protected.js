import { getSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Protected() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Strapi - Next -- NextAuth</title>
            </Head>
            <h1>Protected Page - Only Admins</h1>
            <Link href="/">
                <button>Back to home page</button>
            </Link>
        </div>
    );
}

export const getServerSideProps = async (context) => {
    const session = await getSession(context);
    // Check if session exists and if the user is Admin, if not, redirect
    if (session == null || session.user.role != "Admin") {
        return {
            redirect: {
                destination: "/auth/not-authenticated",
                permanent: true,
            },
        };
    }
    return {
        props: {},
    };
};
