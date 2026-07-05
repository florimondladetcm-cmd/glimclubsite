// Prefixes a public/ asset path with Vite's configured base (e.g. "/" locally,
// "/glimclubsite/" on GitHub Pages) so hardcoded image/video paths still
// resolve correctly wherever the site is deployed.
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
