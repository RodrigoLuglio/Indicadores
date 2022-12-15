import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { ActionIcon, useMantineColorScheme, Button } from "@mantine/core";
import { Sun, MoonStars } from "tabler-icons-react";
import styles from "../styles/Home.module.css";

export default function Home() {
    const { data: session } = useSession();

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";

    const [opened, setOpened] = useState(false);

    useEffect(() => {
        if (session == null) return;
        console.log("Session -> ", session);
    }, [session]);

    return (
        <div className={styles.container}>
            <Head>
                <title>Strapi - Next - NextAuth</title>
            </Head>
            <h1>{session ? "Authenticated" : "Not Authenticated"}</h1>
            <div>
                <ActionIcon
                    variant="outline"
                    color={dark ? "yellow" : "blue"}
                    onClick={() => toggleColorScheme()}
                    title="Toggle color scheme"
                >
                    {dark ? <Sun size={18} /> : <MoonStars size={18} />}
                </ActionIcon>
            </div>
            {session && (
                <div style={{ marginBottom: 10 }}>
                    <h3 className="text-3xl font-bold underline">
                        Session Data
                    </h3>
                    <div>Email: {session.user.email}</div>
                    <div>Role: {session.user.role}</div>
                    <div>JWT from Strapi: Check console</div>
                </div>
            )}
            {session ? (
                <Button onClick={signOut}>Sign out</Button>
            ) : (
                <Link href="/auth/sign-in">
                    <Button color="orange" variant="default">
                        Sign In
                    </Button>
                </Link>
            )}
            <Link href="/protected">
                <Button
                    style={{
                        marginTop: 10,
                    }}
                >
                    Protected Page
                </Button>
            </Link>
        </div>
    );
}
