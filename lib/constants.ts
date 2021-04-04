export const FOOTER = 'Build by Lukasz Pietraszek with NextJS and TailwindCSS';

export const FLICKR_DEFAULT_SEARCH = 'space';

export const FLICKR_PHOTOS_PUBLIC = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.FLICKR_API_KEY}&extras=date_taken&nojsoncallback=1&format=json`;

export const FLICKR_PHOTO_INFO = `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${process.env.FLICKR_API_KEY}&extras=date_taken&nojsoncallback=1&format=json`;
