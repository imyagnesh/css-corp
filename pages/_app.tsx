import "../styles/globals.css";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { AuthProvider } from "context";
import { SessionProvider } from "next-auth/react";
import Auth from "@components/Auth";

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  auth?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>{getLayout(<Component {...pageProps} />)}</Auth>
      ) : (
        getLayout(<Component {...pageProps} />)
      )}
    </SessionProvider>
  );
}

export default MyApp;
