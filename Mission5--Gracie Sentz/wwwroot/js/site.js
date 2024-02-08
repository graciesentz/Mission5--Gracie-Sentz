function calculateTotal() {
    // Get the value of hours input
    var hours = parseFloat($("#hours").val());

    // Validate if hours is a positive number
    if (isNaN(hours) || hours < 0) {
        alert("Please enter a valid positive number for hours.");
        return;
    }

    // Calculate total
    var total = hours * 603;

    // Display 
    $("#totalDisplay").text("Total: $" + total.toFixed(2));
}
$(document).ready(function () {
    $("#calculateButton").click(calculateTotal);
});
