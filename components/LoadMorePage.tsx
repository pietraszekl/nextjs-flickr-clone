import useSWR from 'swr';
import LoadingSpinner from '@/components/LoadingSpinner';
import ListItem from '@/components/ListItem';
import { PageItem } from '@/types/components';
import fetcher from '@/utils/fetcher';

const LoadMorePage = ({ index, searchedTag }: PageItem) => {
  const { data } = useSWR(['/api/photos', searchedTag, index], fetcher);
  let itemsList;
  if (!data) {
    itemsList = <LoadingSpinner />;
  }
  if (data) {
    const items = data.photos.photos.photo;
    itemsList = items.map((item, index) => (
      <ListItem key={index} item={item} />
    ));
  }

  return itemsList;
};

export default LoadMorePage;
