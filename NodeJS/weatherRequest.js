const request = require("request");
const url =
  "https://api.darksky.net/forecast/713c1301f6d5737193a7ef21b286726c/37.8267,-122.4233?units=si"; //after adding ?uints=s1..temp got converted from farheneit to celsius

request({ url: url, json: true }, (error, response) => {
  console.log(
    response.body.daily.data[0].summary +
      " It is currently " +
      response.body.currently.temperature +
      " degrees out. There is a " +
      response.body.currently.precipProbability +
      "% chance of rain"
  );
});

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidGFwYXNkYXNoIiwiYSI6ImNrMmdtY3ViOTAxMW4zcGxpZHF0bGw2OGQifQ.CTU39iCA2FIWw9iJd57Cjg";

request({ url: geocodeURL, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0];
  console.log(latitude, longitude);
});
