$(function() {

    //1. Display the icon for the current conditions (observation)
    $.ajax({
        url : "http://api.wunderground.com/api/e968519d2cc4a89b/conditions/q/FL/Orlando.json",
        dataType : "json",
        success : function(parsed_json) {
            var icon = parsed_json['current_observation']['icon_url'];
            $("#icons").attr("src", icon );
        }});

    //2. Display weather
    $.ajax({
        url : "http://api.wunderground.com/api/e968519d2cc4a89b/conditions/q/FL/Orlando.json",
        dataType : "json",
        success : function(parsed_json) {
            var weath = parsed_json['current_observation']['weather'];
            $("#weather").text("Currently it is " + weath + " outside.");
        }});

   // 3. Display temperature in F
    $.ajax({
        url : "http://api.wunderground.com/api/e968519d2cc4a89b/conditions/q/FL/Orlando.json",
        dataType : "json",
        success : function(parsed_json) {
            var location = parsed_json['current_observation']['display_location']['city'];
            var feels = parsed_json['current_observation']['feelslike_f'];
            $("#temp").text("Current temperature in " + location + " is: " + feels +" degrees in fahrenheit");

        }});



    //  4. Display feels like temperature
    $.ajax({
        url : "http://api.wunderground.com/api/e968519d2cc4a89b/conditions/q/FL/Orlando.json",
        dataType : "json",
        success : function(parsed_json) {
            var temp_f = parsed_json['current_observation']['temp_f'];
            $("#feel").text("Currently it feels like "  + temp_f +" degrees in fahrenheit.");
        }});

    //5. Display relative humidity
    $.ajax({
        url : "http://api.wunderground.com/api/e968519d2cc4a89b/conditions/q/FL/Orlando.json",
        dataType : "json",
        success : function(parsed_json) {
            var humidity = parsed_json['current_observation']['relative_humidity'];
            $("#humid").text("The relative humidity is "  + humidity);
        }});

    //6. Display wind direction
    $.ajax({
        url : "http://api.wunderground.com/api/e968519d2cc4a89b/conditions/q/FL/Orlando.json",
        dataType : "json",
        success : function(parsed_json) {
            var wind = parsed_json['current_observation']['wind_dir'];
            $("#dir").text("The wind direction is "  + wind);
        }});

    //7. Display wind miles per hour
    $.ajax({
        url : "http://api.wunderground.com/api/e968519d2cc4a89b/conditions/q/FL/Orlando.json",
        dataType : "json",
        success : function(parsed_json) {
            var perHour = parsed_json['current_observation']['wind_mph'];
            $("#miles").text("The winds speed is " + perHour + " mph");
        }});


   // 1. Display the Hourly 1-day forecast
   // 2. Display the condition for each hour
   // 3. Display the temperature for each hour
    $.ajax({
        url: "http://api.wunderground.com/api/e968519d2cc4a89b/hourly/q/FL/Orlando.json",
        dataType: "json",
        success: function (parsed_json) {
            var forecast = parsed_json['hourly_forecast'];
            for (var i = 0, j = forecast.length; i < j; i++) {
                var hour = forecast[i]['FCTTIME']['pretty'],
                    condition = forecast[i]['condition'],
                    temp = forecast[i]['temp']['english'];
                $("#hourly").append('<p> Time: ' + hour + '<br> Current Condition: ' + condition + '<br> Current Temperature: ' + temp + '</p>');
            }
        }
    });

    //7-Day Forecast
    //1. Display the 7-day forecast
    //2. Display the icon
    //3. Display weather
    //4. Display highs
    //5. Display lows
    //6. Display conditions

    $.ajax({
        url: "http://api.wunderground.com/api/e968519d2cc4a89b/forecast10day/q/FL/Orlando.json",
        dataType: "json",
        success: function(parsed_json){
            var days = parsed_json['forecast']['simpleforecast']['forecastday'];
            for (var i = 0, j = days.length; i < j - 3; i++) {
                var tle = days[i]['date']['weekday'];
                var images = days[i]['icon_url'];
                var highs = days[i]['high']['fahrenheit'];
                var lows = days[i]['low']['fahrenheit'];
                var conds = days[i]['conditions'];
                $(".seven").append('<p>' + tle + '</p>');
                $(".seven").append('<img src ="' + images + '"alt="img">');
                $(".seven").append("<p> A high temperature of " + highs + '</p>');
                $(".seven").append("<p> A low temperature of " + lows + '</p>');
                $(".seven").append('<p>' + conds + '</p>');
            }
        }
    });

});


