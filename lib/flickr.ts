import { FLICKR_PHOTOS_PUBLIC } from './constants';

export async function getAllPhotos(searchedTag, itemsPerPage, currentPage) {
  try {
    const baseUrl = FLICKR_PHOTOS_PUBLIC;
    const requestUrl = `${baseUrl}&tags=${searchedTag}&page=${currentPage}&per_page=${itemsPerPage}`;
    const res = await fetch(requestUrl);
    const photos = await res.json();
    return { photos };
  } catch (error) {
    return { error };
  }
}
