import { getAllPhotos } from '@/lib/flickr';

export default async (req, res) => {
  const { data, error } = await getAllPhotos();

  if (error) {
    res.status(500).json({ error });
  }

  res.status(200).json({ data });
};
