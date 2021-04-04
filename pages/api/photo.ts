import { getSinglePhoto } from '@/lib/flickr';

export default async (req, res) => {
  const { photoItem, error } = await getSinglePhoto(req.headers.searchedtag);

  if (error) {
    res.status(500).json({ error });
  }

  res.status(200).json({ photoItem });
};
