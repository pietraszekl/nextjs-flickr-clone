import { FLICKR_PHOTOS_PUBLIC } from './constants';
export async function getAllPhotos() {
  try {
    const res = await fetch(FLICKR_PHOTOS_PUBLIC);
    const data = await res.json();
    return { data };
  } catch (error) {
    return { error };
  }
}
