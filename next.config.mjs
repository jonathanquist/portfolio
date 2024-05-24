/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: async function () {
    // Fetch or generate a list of possible values for [slug]
    const slugs = await fetchSlugsFromYourDataSource();

    // Create a map of pages with the slug as the key
    const pages = slugs.reduce((pages, slug) => {
      return {
        ...pages,
        [`/projects/${slug}`]: { page: "/projects/[slug]", query: { slug } },
      };
    }, {});

    // Add other pages that are not dynamic
    pages["/"] = { page: "/" };
    pages["/about"] = { page: "/about" };
    pages["/reel"] = { page: "/reel" };

    return pages;
  },
};

export default nextConfig;
