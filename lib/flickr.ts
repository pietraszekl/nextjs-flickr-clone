import { FLICKR_PHOTOS_PUBLIC, FLICKR_PHOTO_INFO } from './constants';

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

export async function getSinglePhoto(searchedTag) {
  try {
    const baseUrl = FLICKR_PHOTO_INFO;
    const requestUrl = `${baseUrl}&photo_id=${searchedTag}`;
    const res = await fetch(requestUrl);
    const photoItem = await res.json();
    return { photoItem };
  } catch (error) {
    return { error };
  }
}
