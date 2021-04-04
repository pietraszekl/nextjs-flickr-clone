const fetcher = async (url, searchedTag, currentPage) => {
  const res = await fetch(url, {
    headers: {
      searchedtag: searchedTag,
      currentpage: currentPage
    }
  });

  return res.json();
};

export default fetcher;
