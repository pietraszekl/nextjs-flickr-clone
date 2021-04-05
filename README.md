# Flickr Clone

![dev branch](https://github.com/pietraszekl/nextjs-flickr-clone/actions/workflows/e2e.yml/badge.svg?branch=develop)

## Stack

- NextJS
- TailwindCSS
- Typescript
- Husky
- Commitizen
- Absolute imports
- SWR
- Search
- Unit tests via Jest & React Testing Library
- e2e tests via Cypress
- Share Photo via Twitter
- CI/CD via GitHub Actions
- [Deployed to Vercel](https://nextjs-flickr-clone.vercel.app/)

---

## Notes

- API URL provided in assignment is not returning JSON object by default. It can be fixed by adding `nojsoncallback=1`
- To implement load more functionality - I have decided to change API from public to custom one hence API key is now required.
- Google +1 - this service is not actively maintained hence replaced by Twitter Share button

---

## Task Requirements

- Layout should match the provided wireframes
- Look and feel is up to you, flat colours for borders and background are all that's expected
- Site should use responsive techniques to ensure it works on a range of devices
- Must be built using HTML, CSS and JavaScript (SCSS or Less are encouraged)
- Use any 3rd party libs you like (as long as they have a weak copyleft license)

- Search items e.g. a free-text search box where text entered is matched against tags
- Infinite scrolling or "Load more" style pagination
- Google +1 button for results
- Build process for generating production-ready code
- Tests (unit tests, e2e tests, etc)
- Also, feel free to include any other features that you think the app could benefit from.
