import Parser from "rss-parser";
const parser = new Parser();

const FEEDS = [
  "https://feeds.feedburner.com/TheHackersNews",
  "https://www.bleepingcomputer.com/feed/",
  "https://nvd.nist.gov/feeds/xml/cve/misc/nvd-rss.xml",
];

export default async function handler(req, res) {
  try {
    let allItems = [];

    for (const url of FEEDS) {
      try {
        const feed = await parser.parseURL(url);

        const items = feed.items.map((item) => ({
          title: item.title,
          link: item.link,
          date: item.pubDate || item.isoDate || "",
          description: item.contentSnippet || "",
          source: feed.title,
        }));

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
