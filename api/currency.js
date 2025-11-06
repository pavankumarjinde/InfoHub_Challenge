import axios from "axios";

export default async function handler(req, res) {
  try {
    const { amount = 1 } = req.query;
    const resp = await axios.get("https://v6.exchangerate-api.com/v6/c607afd8a1330689f9bddb76/latest/INR");
    const data = resp.data.conversion_rates;
    res.status(200).json({
      usd: (amount * data.USD).toFixed(4),
      eur: (amount * data.EUR).toFixed(4)
    });
  } catch (err) {
    res.status(500).json({ error: "Could not fetch currency data." });
  }
}
