/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://buma.wiki",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 1,
  exclude: ["/exclude/review", "/exclude/**"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/exclude"],
      },
    ],
  },
};
