import React from 'react';
import fetcher from '@/utils/fetcher';
import useSWR from 'swr';

const ListView = () => {
  const { data } = useSWR(['/api/photos'], fetcher);

  console.log(data);

  if (!data) {
    return <>Loading...</>;
  }

  return <>Loaded</>;
};

export default ListView;
