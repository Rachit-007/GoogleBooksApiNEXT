import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from "@apollo/client";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import client from "../graphql/client";
import { Header } from "../components/header/header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loader } from "../components/loader/loader";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("finished");
      setLoading(false);
    };
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeError", end);
    router.events.on("routeChangeComplete", end);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      <SessionProvider session={session}>
        <ApolloProvider client={client}>
          <Toaster />
          {!Component.getLayout && <Header />}
          {loading ? <Loader /> : <Component {...pageProps} />}
        </ApolloProvider>
      </SessionProvider>
    </>
  );
}
