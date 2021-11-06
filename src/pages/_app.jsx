import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { AppLayout } from 'src/Layouts/AppLayout';
import { SWRConfig } from 'swr';

const fetcher = async (url) => {
  const response = await fetch(url);
  console.log('Static');
  if (!response.ok) {
    throw new Error('エラーが発生したため、データの取得に失敗しました');
  }
  const json = await response.json();
  return json;
};

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SWRConfig value={{ fetcher }}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </SWRConfig>
    </>
  );
};

export default MyApp;
