import '../styles/globals.css';

import type { AppProps } from 'next/app';

import DefaultLayout from '../components/layouts/default';

import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
      {/* Toaster component for React Hot Toasts */}
      <Toaster />
    </>
  );
}

export default MyApp;
