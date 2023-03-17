import '../styles/globals.css';
import * as React from "react";
import type { AppProps } from 'next/app';

import DefaultLayout from '../components/layouts/default';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <DefaultLayout>
            <Component {...pageProps} />
        </DefaultLayout>
    );
}

export default MyApp;
