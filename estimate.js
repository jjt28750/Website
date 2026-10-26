// Constants for prices of items
const STICKER_3IN = 3;
const STICKER_4IN = 4;
const POSTCARD_PRINT = 5;
const MINI_PRINT = 3;

// Add event listener
window.addEventListener("load", setupForm);

// Set the form's default values
function setupForm() {
    document.getElementById("sticker3in").value = 1;
    document.getElementById("sticker4in").value = 1;
    document.getElementById("prints").value = 1;
    document.getElementById("miniPrints").value = 1;

    getEstimate();

    // Add events handlers for each input control
    document.getElementById("sticker3in").onchange = getEstimate;
    document.getElementById("sticker4in").onchange = getEstimate;
    document.getElementById("prints").onchange = getEstimate;
    document.getElementById("miniPrints").onchange = getEstimate;
}

// Calculate estimate of items
function getEstimate() {
    let totalCost = 0;
    let sticker3in = document.getElementById("sticker3in").value;
    let stickers4in = document.getElementById("sticker4in").value;
    let postcardPrints = document.getElementById("prints").value;
    let miniPrints = document.getElementById("miniPrints").value;

    // Add total cost of 3 inch stickers
    totalCost += sticker3in * STICKER_3IN;

    // Add total cost of 4 inch stickers
    totalCost += stickers4in * STICKER_4IN;

    // Add total cost of postcard prints
    totalCost += postcardPrints * POSTCARD_PRINT;

    // Add total cost of mini prints
    totalCost += miniPrints * MINI_PRINT;

    document.getElementById("estimate").innerHTML = "$" + totalCost;
}