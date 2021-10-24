import { useRouter } from 'next/router';
import { fetcher } from 'src/components/utils/fetcher';
import useSWR from 'swr';

export const useUser = () => {
  const router = useRouter();
  const { data: user, error: userError } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
      : null,
    fetcher
  );

  const { data: posts, error: postsError } = useSWR(
    user?.id
      ? `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
      : null,
    fetcher
  );

  return {
    posts,
    user,
    error: postsError || userError,
    isLoading: !user && !userError,
  };
};
