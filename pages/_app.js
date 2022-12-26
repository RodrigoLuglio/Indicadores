import "../styles/globals.css";
import "handsontable/dist/handsontable.full.min.css";

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
<<<<<<< HEAD
                        {/* Quando for testar local descomentar a linha abaixo */}
                        <SessionProvider session={session}>
                            {/* Quando for fazer push para o servidor descomentar a linha abaixo */}
                            {/* <SessionProvider
                            session={session}
                            basePath="/indicadores/api/auth"
                        > */}
=======
                        <SessionProvider session={session} basePath={basepath}>
>>>>>>> 697c15c1a375cabb4f0a6a2cc24abecb84c5abe7
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