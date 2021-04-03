const fetcher = async (url, searchedTag, itemsPerPage, currentPage) => {
  const res = await fetch(url, {
    headers: {
      searchedtag: searchedTag,
      itemsperpage: itemsPerPage,
      currentpage: currentPage
    }
  });

  return res.json();
};

export default fetcher;
