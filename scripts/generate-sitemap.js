import { createClient } from "@sanity/client";
import fs from "fs";
import path from "path";

// Sanity clients configuration
const client1 = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID_1,
  dataset: process.env.VITE_SANITY_DATASET_2,
  apiVersion: "2024-03-20",
  useCdn: true,
});

const client2 = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID_2,
  dataset: process.env.VITE_SANITY_DATASET_2,
  apiVersion: "2024-03-20",
  useCdn: true,
});

const client3 = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID_3,
  dataset: process.env.VITE_SANITY_DATASET_3,
  apiVersion: "2024-03-20",
  useCdn: true,
});

const client4 = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID_4,
  dataset: process.env.VITE_SANITY_DATASET_4,
  apiVersion: "2024-03-20",
  useCdn: true,
});

const baseUrl = "https://rookhq.com";
const currentDate = new Date().toISOString().split("T")[0];

// Static pages with priorities
const staticPages = [
  { path: "/", priority: "1.0", changefreq: "daily" },
  { path: "/about", priority: "0.9", changefreq: "monthly" },
  { path: "/life", priority: "0.9", changefreq: "monthly" },
  { path: "/invest", priority: "0.9", changefreq: "monthly" },
  { path: "/careers", priority: "0.9", changefreq: "weekly" },
  { path: "/perspectives", priority: "0.9", changefreq: "weekly" },
  { path: "/press-release", priority: "0.9", changefreq: "weekly" },
  { path: "/media-coverage", priority: "0.9", changefreq: "weekly" },
  { path: "/letter-from-the-ceo", priority: "0.9", changefreq: "weekly" },
  { path: "/profit-pledge", priority: "0.8", changefreq: "monthly" },
  { path: "/rook-for-startups", priority: "0.9", changefreq: "monthly" },
  { path: "/startups/hlo-enterprise-legal", priority: "0.8", changefreq: "monthly" },
  { path: "/startups/myprobuddy", priority: "0.8", changefreq: "monthly" },
  { path: "/startups/zoho", priority: "0.8", changefreq: "monthly" },
  { path: "/links", priority: "0.8", changefreq: "monthly" },
  { path: "/scoop", priority: "0.8", changefreq: "monthly" },
  { path: "/friends", priority: "0.8", changefreq: "monthly" },
  { path: "/developers", priority: "0.8", changefreq: "monthly" },
  { path: "/devconference", priority: "0.8", changefreq: "monthly" },
  { path: "/support", priority: "0.7", changefreq: "monthly" },
  { path: "/compliance", priority: "0.7", changefreq: "monthly" },
  { path: "/brand-kit", priority: "0.7", changefreq: "monthly" },
  { path: "/trademark", priority: "0.7", changefreq: "monthly" },
  { path: "/open-source", priority: "0.7", changefreq: "monthly" },
  { path: "/terms", priority: "0.5", changefreq: "yearly" },
  { path: "/privacy", priority: "0.5", changefreq: "yearly" },
];

async function fetchSanityArticles() {
  const articles = [];

  try {
    // Fetch Perspectives
    const perspectives = await client1.fetch(
      `*[_type == "post"] | order(publishedAt desc) {
        "slug": slug.current,
        publishedAt
      }`
    );
    perspectives.forEach((item) => {
      if (item.slug) {
        articles.push({
          path: `/perspectives/${item.slug}`,
          priority: "0.8",
          changefreq: "monthly",
          lastmod: item.publishedAt ? new Date(item.publishedAt).toISOString().split("T")[0] : currentDate,
        });
      }
    });
  } catch (error) {
    console.error("Error fetching perspectives:", error);
  }

  try {
    // Fetch Press Releases
    const pressReleases = await client2.fetch(
      `*[_type == "post"] | order(publishedAt desc) {
        "slug": slug.current,
        publishedAt
      }`
    );
    pressReleases.forEach((item) => {
      if (item.slug) {
        articles.push({
          path: `/press-release/${item.slug}`,
          priority: "0.8",
          changefreq: "monthly",
          lastmod: item.publishedAt ? new Date(item.publishedAt).toISOString().split("T")[0] : currentDate,
        });
      }
    });
  } catch (error) {
    console.error("Error fetching press releases:", error);
  }

  try {
    // Fetch Media Coverage (these might not have individual pages, but we'll include the main page)
    // Media coverage seems to be a listing page, so we'll just include the main page
  } catch (error) {
    console.error("Error fetching media coverage:", error);
  }

  try {
    // Fetch CEO Letters
    const ceoLetters = await client4.fetch(
      `*[_type == "post"] | order(publishedAt desc) {
        "slug": slug.current,
        publishedAt
      }`
    );
    ceoLetters.forEach((item) => {
      if (item.slug) {
        articles.push({
          path: `/letter-from-the-ceo/${item.slug}`,
          priority: "0.8",
          changefreq: "monthly",
          lastmod: item.publishedAt ? new Date(item.publishedAt).toISOString().split("T")[0] : currentDate,
        });
      }
    });
  } catch (error) {
    console.error("Error fetching CEO letters:", error);
  }

  return articles;
}

function generateSitemapXML(pages) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  pages.forEach((page) => {
    const lastmod = page.lastmod || currentDate;
    xml += `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  xml += `</urlset>`;
  return xml;
}

async function main() {
  console.log("Generating sitemap...");
  
  const sanityArticles = await fetchSanityArticles();
  const allPages = [...staticPages, ...sanityArticles];

  const sitemapXML = generateSitemapXML(allPages);

  // Write to both locations
  fs.writeFileSync(path.join(process.cwd(), "sitemap.xml"), sitemapXML);
  fs.writeFileSync(path.join(process.cwd(), "public", "sitemap.xml"), sitemapXML);

  console.log(`Sitemap generated with ${allPages.length} URLs`);
  console.log(`- ${staticPages.length} static pages`);
  console.log(`- ${sanityArticles.length} Sanity CMS articles`);
}

main().catch(console.error);

