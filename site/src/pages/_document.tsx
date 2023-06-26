import { globalCss } from "@/styles/globals";
import { Global } from "@emotion/react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <Global styles={globalCss} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
