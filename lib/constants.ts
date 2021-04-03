export const FOOTER = 'Build by Lukasz Pietraszek with NextJS and TailwindCSS';

export const FLICKR_DEFAULT_SEARCH = 'Zabrze';

export const FLICKR_PHOTOS_PUBLIC = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.FLICKR_API_KEY}&extras=date_taken&nojsoncallback=1&format=json`;
