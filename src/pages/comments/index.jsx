import Head from 'next/head';
import { Header } from 'src/components/Header';
import { Comments as CommentsComponent } from 'src/components/Comments';
import { SWRConfig } from 'swr';
import { API_URL } from 'src/components/utils/const';

export const getStaticProps = async () => {
  const COMMENTS_API_URL = `${API_URL}/comments`;
  console.log('SGのページ');
  const comments = await fetch(COMMENTS_API_URL);
  const commentsData = await comments.json();

  return {
    props: {
      fallback: {
        [COMMENTS_API_URL]: commentsData,
      },
    },
    revalidate: 10,
  };
};

const Comments = (props) => {
  const { fallback } = props;
  return (
    <div>
      <Head>
        <title>Comments Page</title>
      </Head>
      <SWRConfig value={{ fallback }}>
        <Header />
        <CommentsComponent />
      </SWRConfig>
    </div>
  );
};
export default Comments;
