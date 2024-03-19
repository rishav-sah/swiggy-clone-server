require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fetch = require("cross-fetch");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Restaurants API
app.get("/api/restaurants", async (req, res) => {
  try {
    const { lat, lng, page_type } = req.query;

    if (!lat || !lng) {
      return res.status(400).send("Latitude and Longitude are required");
    };
    
    const apiUrl = `${process.env.SWIGGY_MAIN_URL}?lat=${lat}&lng=${lng}&page_type=${page_type || "default"}`;
    const response = await fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
      }
    });

    if (!response.ok) {
      throw new Error(`API response failed with the status ${response.status}`);
    };

    const data = await response.json();
    res.json(data);

  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching data");
  };
});

// Menu API
app.get("/api/menu", async (req, res) => {
  try {
    const { 'page-type': page_type, 'complete-menu': complete_menu, lat, lng, submitAction, restaurantId } = req.query;
    console.log(req.query);

    const url = `https://www.swiggy.com/dapi/menu/pl?page-type=${page_type}&complete-menu=${complete_menu}&lat=${lat}&lng=${lng}&submitAction=${submitAction}&restaurantId=${restaurantId}`;
    
    const apiUrl = `${process.env.SWIGGY_MENU_URL}=${page_type}&complete-menu=${complete_menu}&lat=${lat}&lng=${lng}&submitAction=${submitAction}&restaurantId=${restaurantId}`;

    const response = await fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
      }
    });

    if (!response.ok) {
      throw new Error(`API response failed with the status ${response.status}`);
    };

    const data = await response.json();
    res.json(data);

  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching data");
  };
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});