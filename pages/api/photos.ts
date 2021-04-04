import { getAllPhotos } from '@/lib/flickr';

export default async (req, res) => {
  const { photos, error } = await getAllPhotos(
    req.headers.searchedtag,
    req.headers.currentpage
  );

  if (error) {
    res.status(500).json({ error });
  }

  res.status(200).json({ photos });
};
