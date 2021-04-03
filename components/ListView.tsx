import { useRef, useState } from 'react';
import fetcher from '@/utils/fetcher';
import useSWR from 'swr';
import LoadingSpinner from './LoadingSpinner';
import ListItem from './ListItem';

function ListView({ defaultTag }) {
  let itemsList;
  let items;

  let loadMoreButton;
  let itemsPerPage = 2;
  const defaultPage = 1;
  const [currentPage, setCurrentPage] = useState(defaultPage);
  const [searchedTag, setSearchedTag] = useState(defaultTag);
  const searchField = useRef(null);
  const { data } = useSWR(
    ['/api/photos', searchedTag, itemsPerPage, defaultPage],
    fetcher
  );
  const extraData = useSWR(
    ['/api/photos', searchedTag, itemsPerPage, currentPage],
    fetcher
  );
  const onSubmit = (e) => {
    e.preventDefault();
    const searchValue = searchField.current.value.replace('\n', '\n\n');
    setSearchedTag(searchValue);
  };
  const onLoadMore = (e) => {
    e.preventDefault();

    setCurrentPage(currentPage + 1);
    console.log('original ', data.photos.photos.photo);

    console.log('loadMoreData', extraData.data.photos.photos.photo);

    //items = [...extraData.data.photos.photos.photo, ...items];
    items = [].concat(
      extraData.data.photos.photos.photo,
      data.photos.photos.photo
    );
    console.log('mergedItems', items);
  };

  if (!data) {
    itemsList = <LoadingSpinner />;
  }
  if (data) {
    items = data.photos.photos.photo;
    if (!items.length) {
      itemsList = 'No results';
    } else {
      itemsList = items.map((item, index) => (
        <ListItem key={index} item={item} />
      ));
    }

    loadMoreButton = (
      <button
        type="button"
        className="border block w-full p-4 my-4 bg-gray-200 hover:bg-gray-700 hover:text-gray-100 font-bold"
        onClick={onLoadMore}
      >
        Load more
      </button>
    );
  }

  return (
    <>
      <h1 className="text-4xl font-bold mb-4">Results for #{searchedTag}</h1>
      <form onSubmit={onSubmit} className="mb-4">
        <input
          name="search"
          type="text"
          className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
          placeholder="Search tags"
          ref={searchField}
        ></input>
      </form>
      {itemsList}
      {loadMoreButton}
    </>
  );
}

export default ListView;
