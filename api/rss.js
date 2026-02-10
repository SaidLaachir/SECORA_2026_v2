// server/api/rss.js
import express from "express";
import Parser from "rss-parser";

const router = express.Router();
const parser = new Parser();

router.get("/", async (req, res) => {
  try {
    // Replace this URL with the RSS feed you want
    const feed = await parser.parseURL("https://feeds.bbci.co.uk/news/rss.xml");

    // Map RSS items to a simpler JSON format
    const items = feed.items.map((item, index) => ({
      id: index,
      title: item.title,
      date: item.pubDate ? new Date(item.pubDate).toLocaleDateString() : "",
      description: item.contentSnippet || item.content || "",
      link: item.link,
      image: item.enclosure?.url || null,
    }));

    res.json(items);
  } catch (err) {
    console.error("RSS fetch failed:", err);
    res.status(500).json({ error: "Failed to fetch RSS feed" });
  }
});

export default router;
