import { API_URL } from 'src/components/utils/const';
import { useFetch } from 'src/hooks/useFetch';

export const UserNameByUserId = (props) => {
  const { data, error, isLoading } = useFetch(
    props.id ? `${API_URL}/users/${props.id}` : null
  );

  if (isLoading) {
    return <div>ローディング中です</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return <div className='text-lg'>Created by {data.name}</div>;
};
