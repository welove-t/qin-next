import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main page='index' />

      <Footer />
    </div>
  );
}
