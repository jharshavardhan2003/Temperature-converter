$(document).ready(function(){
    // Celsius to Fahrenheit conversion
    $("#celsius").on("input", function(){
        let celsius = parseFloat($(this).val());
        if (!isNaN(celsius)) {
            let fahrenheit = (celsius * 9/5) + 32;
            $("#fahrenheit").val(fahrenheit.toFixed(2)); // Display with 2 decimal places
        } else {
            $("#fahrenheit").val(""); // Clear if input is empty
        }
    });

    // Fahrenheit to Celsius conversion
    $("#fahrenheit").on("input", function(){
        let fahrenheit = parseFloat($(this).val());
        if (!isNaN(fahrenheit)) {
            let celsius = (fahrenheit - 32) * 5/9;
            $("#celsius").val(celsius.toFixed(2));
        } else {
            $("#celsius").val("");
        }
    });
});
