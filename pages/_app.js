import "../styles/globals.css";
import 'react-tabulator/lib/styles.css'; // required styles
import 'react-tabulator/lib/css/tabulator.min.css'; // theme

import { useState } from "react";
import { SessionProvider } from "next-auth/react";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import PresenceTheme from "../services/presenceTheme";




    function MyApp({ Component, pageProps: { session, ...pageProps } }) {
        const [colorScheme, setColorScheme] = useState("light");
        const toggleColorScheme = (value) =>
            setColorScheme(
                value || (colorScheme === "dark" ? "light" : "dark")
            );

        const getLayout = Component.getLayout || ((page) => page);

        const basepath = (process.env.NODE_ENV == 'development') ? null : "/indicadores/api/auth";

        return (
            <>
                <ColorSchemeProvider
                    colorScheme={colorScheme}
                    toggleColorScheme={toggleColorScheme}
                >
                    <MantineProvider
                        theme={PresenceTheme(colorScheme)}
                        withGlobalStyles
                        withNormalizeCSS
                    >
                        <SessionProvider session={session} basePath={basepath}>
                            <NotificationsProvider position="top-right">
                                {getLayout(<Component {...pageProps} />)}
                            </NotificationsProvider>
                        </SessionProvider>
                    </MantineProvider>
                </ColorSchemeProvider>
            </>
        );
    }
    export default MyApp;