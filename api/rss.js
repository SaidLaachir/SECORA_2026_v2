import Parser from "rss-parser";
const parser = new Parser({
  customFields: {
    item: ["media:content", "media:thumbnail", "enclosure"],
  },
});

const FEEDS = [
  "https://feeds.feedburner.com/TheHackersNews",
  "https://www.bleepingcomputer.com/feed/",
  "https://nvd.nist.gov/feeds/xml/cve/misc/nvd-rss.xml",
];

const DEFAULT_IMAGE = "/cybernews.jpg";

export default async function handler(req, res) {
  try {
    let allItems = [];

    for (const url of FEEDS) {
      try {
        const feed = await parser.parseURL(url);

        const items = feed.items.map((item) => {
          let image = null;

          if (item.enclosure?.url) {
            image = item.enclosure.url;
          } else if (item["media:content"]?.url) {
            image = item["media:content"].url;
          } else if (item["media:thumbnail"]?.url) {
            image = item["media:thumbnail"].url;
          }

          // ✅ Use content for a longer paragraph if available, otherwise fallback
          let contentText = item.content || item.contentSnippet || "";

          // Strip HTML tags
          contentText = contentText.replace(/<[^>]+>/g, "");

          // Truncate to ~350 chars (~4–5 lines)
          if (contentText.length > 350) {
            contentText = contentText.slice(0, 350) + "...";
          }

          return {
            title: item.title,
            link: item.link,
            date: item.pubDate || item.isoDate || "",
            description: contentText, // ✅ longer preview
            source: feed.title,
            image: image || DEFAULT_IMAGE,
          };
        });

        allItems.push(...items);
      } catch (e) {
        console.error("Feed failed:", url);
      }
    }

    // Sort newest first
    allItems.sort(
      (a, b) => new Date(b.date || 0) - new Date(a.date || 0)
    );

    res.status(200).json(allItems.slice(0, 50));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "RSS aggregation failed" });
  }
}
