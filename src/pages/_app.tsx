import {CenteredPage, GlobalStyle} from "../styles";
import Head from "next/head";
import * as React from "react";
import Footer from "../components/Footer";


import { AppProps /*, AppContext */ } from 'next/app';
import {NavCol} from "../NavCol/NavCol";


const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>

            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                    as="icon"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

            </Head>
        <GlobalStyle />

            <NavCol />

            {/*<br />*/}
            <CenteredPage>
                <Component {...pageProps} />
            </CenteredPage>

        </>
)
}

export default MyApp

