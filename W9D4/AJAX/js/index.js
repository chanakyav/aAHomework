
$( () => {
    console.log("Hello from the JavaScript console");
    
    // Your AJAX request here
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b",
        method: "GET",
        dataType: "json",
        success(data) { console.log(data.weather) },
        error() { console.log("Request failed") }
    });

    // Add another console log here, outside your AJAX request
    console.log("AJAX request was sent first");
    
});
