// Add event listneners to images
let worldBuilding = document.getElementById("worldBuilding");
worldBuilding.addEventListener("click", createOverlay);

let items = document.getElementById("items");
items.addEventListener("click", createOverlay);
let enemyAssets = document.getElementById("enemyAssets");
enemyAssets.addEventListener("click", createOverlay);
let charaAssets = document.getElementById("charaAssets");
charaAssets.addEventListener("click", createOverlay);

let backgrounds = document.getElementById("backgrounds");
backgrounds.addEventListener("click", createOverlay);
let cast = document.getElementById("cast");
cast.addEventListener("click", createOverlay);
let rainyDay = document.getElementById("rainyDay");
rainyDay.addEventListener("click", createOverlay);

let comic1 = document.getElementById("comic1");
comic1.addEventListener("click", createOverlay);
let comic2 = document.getElementById("comic2");
comic2.addEventListener("click", createOverlay);
let comic3 = document.getElementById("comic3");
comic3.addEventListener("click", createOverlay);
let comic4 = document.getElementById("comic4");
comic4.addEventListener("click", createOverlay);
let comic5 = document.getElementById("comic5");
comic5.addEventListener("click", createOverlay);

// Function to create overlay
function createOverlay() {
    // Create overlay element
    let overlay = document.createElement("div");
    overlay.id = "imgOverlay";

    // Create figure box element
    let figureBox = document.createElement("figure");
    // Add the figure box to the overlay
    overlay.appendChild(figureBox);

    // Add overlay to the body of HTML
    document.body.appendChild(overlay)

    // Add the image to the figure box
    let overlayImage = this.cloneNode("true");
    figureBox.appendChild(overlayImage);

    // Add the alt text to overlay
    let overlayCaption = document.createElement("figCaption");
    overlayCaption.textCOntent = this.alt;
    figureBox.appendChild(overlayCaption);

    // Add a close button to the overlay
    let closeBox = document.createElement("div");
    closeBox.id = "overlayClose";
    closeBox.innterHTML = "X";
    closeBox.onclick = function () {
        document.body.removeChild(overlay);
    }
    overlay.appendChild(closeBox);
}