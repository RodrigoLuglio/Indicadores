import "../styles/globals.css";
import { useState } from "react";
import { SessionProvider } from "next-auth/react";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

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
          <SessionProvider session={session}>
            <Component {...pageProps} />
          </SessionProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default MyApp;
