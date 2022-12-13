import { createGetInitialProps } from "@mantine/next";
import Document, { Head, Html, Main, NextScript } from "next/document";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta charSet="utf-8" />
        </Head>
        <body>
          <div className="fixed bottom-0 w-6 h-6 left-0 z-50 bg-gray-400 sm:bg-yellow-400 md:bg-red-600 lg:bg-cyan-600 xl:bg-green-400 2xl:bg-gray-800"><p></p></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
