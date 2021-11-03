import { useRouter } from 'next/router';
import { API_URL } from 'src/components/utils/const';
import useSWR from 'swr';

export const useComment = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    router.query.id ? `${API_URL}/comments/${router.query.id}` : null
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
