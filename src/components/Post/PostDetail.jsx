import Head from 'next/head';
import { useRouter } from 'next/router';
import { CommentListByPostId } from 'src/components/Comment/CommentListByPostId';
import { UserNameByUserId } from 'src/components/User/UserNameByUserId';
import { API_URL } from 'src/components/utils/const';
import { useFetch } from 'src/hooks/useFetch';

export const PostDetail = () => {
  const router = useRouter();
  const { data, error } = useFetch(
    router.query.id ? `${API_URL}/posts/${router.query.id}` : null
  );
  if (!data && !error) {
    return <div>ローディング中です</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <UserNameByUserId id={data.userId} />
      <h1 className='text-3xl font-bold'>{data?.title}</h1>
      <p className='text-xl text-gray-600 mt-2'>{data?.body}</p>
      <h2 className='text-xl font-bold mt-10'>コメント一覧</h2>
      <div className='mt-2'>
        <CommentListByPostId id={data.id} />
      </div>
    </div>
  );
};
