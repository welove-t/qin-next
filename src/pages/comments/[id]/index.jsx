import { CommentDetail } from 'src/components/Comment/CommentDetail';
import { SWRConfig } from 'swr';
import { useRouter } from 'next/router';
import { API_URL } from 'src/components/utils/const';

export const getStaticPaths = async () => {
  const comments = await fetch(`${API_URL}/comments?_limit=10`);
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
  const COMMENT_API_URL = `${API_URL}/comments/${id}`;
  console.log('SGのページ');
  const comment = await fetch(COMMENT_API_URL);

  if (!comment.ok) {
    return {
      notFount: true,
      revalidate: 10,
    };
  }
  const commentData = await comment.json();

  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: commentData,
      },
    },
    revalidate: 1,
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
        <CommentDetail />
      </SWRConfig>
    </div>
  );
};
export default CommentsId;
