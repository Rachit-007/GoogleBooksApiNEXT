import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from "@apollo/client";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import client from "../graphql/client";
import { Header } from "../components/header/header";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <SessionProvider session={session}>
        <ApolloProvider client={client}>
          <Toaster />
          {!Component.getLayout && <Header />}
          <Component {...pageProps} />
        </ApolloProvider>
      </SessionProvider>
    </>
  );
}
