Meteor.methods({
  // The method expects a valid US zip code
  weather: function (zip) {
    console.log("Get weather for", zip);
    // Construct the API URL
    var apiKey = "d2cf7e30435d29aa175d867ec75cde9b";
    var apiUrl =
      "http://api.openweathermap.org/data/2.5/weather?zip=" +
      zip +
      "&appid=" +
      apiKey +
      "&lang=tr";
    // query the API
    var response = HTTP.get(apiUrl).data;
    return response;
  },
});
