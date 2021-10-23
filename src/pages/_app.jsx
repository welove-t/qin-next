import 'src/styles/globals.css';
import Head from 'next/head';
import { useConter } from 'src/hooks/useConter';
import { useInputArray } from 'src/hooks/useInputArray';
import { useBgLightBlue } from 'src/hooks/useBgLightBlue';

function MyApp({ Component, pageProps }) {
  const counter = useConter();
  const inputArray = useInputArray();
  useBgLightBlue();
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} {...counter} {...inputArray} />
    </>
  );
}

export default MyApp;
