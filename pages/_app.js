import "../styles/globals.css";
import "handsontable/dist/handsontable.full.min.css";

import { useState } from "react";
import { SessionProvider } from "next-auth/react";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

// import Handsontable from "handsontable/base";
// import { registerAllModules } from "handsontable/registry";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    const [colorScheme, setColorScheme] = useState("light");
    const toggleColorScheme = (value) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

    const getLayout = Component.getLayout || ((page) => page);

    return (
        <>
            <ColorSchemeProvider
                colorScheme={colorScheme}
                toggleColorScheme={toggleColorScheme}
            >
                <MantineProvider
                    theme={{ colorScheme: colorScheme }}
                    withGlobalStyles
                    withNormalizeCSS
                >
                    {/* Quando for testar local descomentar a linha abaixo */}
                    <SessionProvider session={session}>
                        {/* Quando for fazer push para o servidor descomentar a linha abaixo */}
                        {/* <SessionProvider
                      session={session}
                      basePath="/indicadores/api/auth"
                  > */}
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
