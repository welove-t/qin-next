import Head from 'next/head';
import { CommentsByPostId } from 'src/components/Comments/CommentsByPostId';
import { UserByUserId } from 'src/components/User/UserByUserId';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetcher } from 'src/components/utils/fetcher';

export const Post = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
      : null,
    fetcher
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
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
      <UserByUserId id={data.userId} />
      <CommentsByPostId id={data.id} />
    </div>
  );
};
