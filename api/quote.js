import axios from "axios";

export default async function handler(req, res) {
  try {
    const q = await axios.get("https://api.quotable.io/random");
    const { content, author } = q.data;
    res.status(200).json({ content, author });
  } catch {
    res.status(500).json({ error: "Could not fetch quote." });
  }
}
