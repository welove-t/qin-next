import { Header } from 'src/components/Header';
import { Comment } from 'src/components/Comment';
import { SWRConfig } from 'swr';
import { useRouter } from 'next/router';

export const getStaticPaths = async () => {
  const comments = await fetch(
    'https://jsonplaceholder.typicode.com/comments?_limit=10'
  );
  const commentsData = await comments.json();
  const paths = commentsData.map((comment) => ({
    params: {
      id: comment.id.toString(),
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const COMMENT_API_URL = `https://jsonplaceholder.typicode.com/comments/${id}`;
  console.log('SGのページ');
  const comment = await fetch(COMMENT_API_URL);

  if (!comment.ok) {
    return {
      notFount: true,
    };
  }
  const commentData = await comment.json();

  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: commentData,
      },
    },
  };
};

const CommentsId = (props) => {
  const { fallback } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <SWRConfig value={{ fallback }}>
        <Header />
        <Comment />
      </SWRConfig>
    </div>
  );
};
export default CommentsId;
