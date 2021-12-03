Meteor.methods({
  // The method expects a valid US city city
  weather: function (city) {
    console.log("Get weather for", city);
    // Construct the API URL
    var apiKey = "d2cf7e30435d29aa175d867ec75cde9b";
    var apiUrl =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      apiKey +
      "&lang=tr";
    // var apiUrl =
    //   "http://api.openweathermap.org/data/2.5/weather?city=" +
    //   city +
    //   "&appid=" +
    //   apiKey +
    //   "&lang=tr";
    // query the API
    var response = HTTP.get(apiUrl).data;
    return response;
  },
});
