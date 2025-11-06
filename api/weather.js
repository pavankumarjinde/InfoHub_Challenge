import axios from "axios";

export default async function handler(req, res) {
  try {
    const { location = "Hyderabad" } = req.query;
    const response = await axios.get("https://api.weatherapi.com/v1/current.json", {
      params: { key: process.env.WEATHER_API_KEY, q: location }
    });

    const data = response.data;
    res.status(200).json({
      location: `${data.location.name}, ${data.location.country}`,
      temperature: data.current.temp_c,
      description: data.current.condition.text
    });
  } catch (err) {
    res.status(500).json({ error: "Could not fetch weather data." });
  }
}
