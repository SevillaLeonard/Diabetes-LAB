
document.addEventListener("DOMContentLoaded", function() {

    const progressValue = document.getElementById("prog_value");
    const linearGradient = document.getElementById("progress-gradient");

    // Function to extract numeric value from the text content
    function getNumericValue(element) {
        // Extract number from text and convert it to integer
        const text = element.textContent;
        const value = parseInt(text.replace(/[^0-9]/g, ''), 10); 
        return value;
    }

    // Get the value from the element and use it to set the gradient color
    const value = getNumericValue(progressValue);

   // Change gradient color based on the condition
if (value < 40) {
    // Set to pure green
    linearGradient.children[0].setAttribute("stop-color", "#008000"); // Green
    linearGradient.children[1].setAttribute("stop-color", "#008000"); // Green
} else if (value >= 40 && value < 60) {
    // Set to yellow
    linearGradient.children[0].setAttribute("stop-color", "#008000"); // Green
    linearGradient.children[1].setAttribute("stop-color", "#FFFF00"); // Yellow
} else if (value >= 60 && value < 80) {
    // Set to orange
    linearGradient.children[0].setAttribute("stop-color", "#FFFF00"); // Yellow
    linearGradient.children[1].setAttribute("stop-color", "#FFA500"); // Orange
} else if (value >= 80) {
    // Set to red
    linearGradient.children[0].setAttribute("stop-color", "#FFA500"); // Orange
    linearGradient.children[1].setAttribute("stop-color", "#FF0000"); // Red
} else {
    // Default to green
    linearGradient.children[0].setAttribute("stop-color", "#32CD32"); // LimeGreen
    linearGradient.children[1].setAttribute("stop-color", "#FFFFFF"); // White
}

});
