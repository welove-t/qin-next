import 'src/styles/globals.css';
import Head from 'next/head';
import { useConter } from 'src/hooks/useConter';
import { useInputArray } from 'src/hooks/useInputArray';
import { useBgColor } from 'src/hooks/useBgColor';

function MyApp({ Component, pageProps }) {
  const counter = useConter();
  const inputArray = useInputArray();
  useBgColor();
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
