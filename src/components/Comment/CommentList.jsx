import Link from 'next/link';
import { API_URL } from 'src/components/utils/const';
import { useFetchArray } from 'src/hooks/useFetchArray';

export const CommentList = () => {
  const { data, error, isLoading, isEmpty } = useFetchArray(
    `${API_URL}/comments`
  );

  if (isLoading) {
    return <div>ローディング中です</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (isEmpty) {
    return <div>データは空です</div>;
  }
  return (
    <ul className='space-y-2'>
      {data.map((comment) => {
        return (
          <li key={comment.id} className='border-b pb-2'>
            <Link href={`/comments/${comment.id}`}>
              <a className='block hover:text-blue-500'>{comment.body}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
