import { useUser } from 'src/hooks/useUser';
import Head from 'next/head';

export const User = () => {
  const { posts, user, error, isLoading } = useUser();
  console.log(posts);
  if (isLoading) {
    return <div>ローディング中です</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{user?.name}投稿一覧</title>
      </Head>
      <h1>{user?.name}さんの投稿一覧</h1>
      <ol>
        {posts &&
          posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
      </ol>
    </div>
  );
};
