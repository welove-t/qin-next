import Head from 'next/head';
import { useRouter } from 'next/router';
import { CommentsByPostId } from 'src/components/Comments/CommentsByPostId';
import { UserByUserId } from 'src/components/User/UserByUserId';
import { usePost } from 'src/hooks/usePost';

export const Post = () => {
  const router = useRouter();
  const { data, error } = usePost(router.query.id);
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
      <UserByUserId id={data.userId} />
      <h1 className='text-3xl font-bold'>{data?.title}</h1>
      <p className='text-xl text-gray-600 mt-2'>{data?.body}</p>
      <h2 className='text-xl font-bold mt-10'>コメント一覧</h2>
      <div className='mt-2'>
        <CommentsByPostId id={data.id} />
      </div>
    </div>
  );
};
