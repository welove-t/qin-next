import { usePost } from 'src/hooks/usePost';
import Link from 'next/link';

export const PostByCommentId = (props) => {
  const { data, error } = usePost(props.id);
  if (!data && !error) {
    return <div>ローディング中です</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Link href={`/posts/${data?.id}`}>
      <a>{data?.title}</a>
    </Link>
  );
};
