import { useRef, useState } from 'react';
import { List } from '@/types/components';
import LoadMorePage from '@/components/LoadMorePage';

const ListView = ({ defaultTag }: List) => {
  const searchField = useRef(null);
  const [cnt, setCnt] = useState(1);
  const [searchedTag, setSearchedTag] = useState(defaultTag);
  const pages = [];

  for (let i = 1; i <= cnt; i++) {
    pages.push(<LoadMorePage index={i} key={i} searchedTag={searchedTag} />);
  }

  const onLoadMore = () => {
    setCnt(cnt + 1);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setCnt(1);
    const searchValue = searchField.current.value.replace('\n', '\n\n');
    setSearchedTag(searchValue);
  };

  const loadMoreButton = (
    <button
      type="button"
      className="border block w-full p-4 my-4 bg-gray-200 hover:bg-gray-700 hover:text-gray-100 font-bold"
      onClick={onLoadMore}
    >
      Load more
    </button>
  );

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
      {pages}
      {loadMoreButton}
    </>
  );
};

export default ListView;
