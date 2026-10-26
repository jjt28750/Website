// Define variables for images
let blue = "art_files/blueStar.png";
let pink = "art_files/pinkStar.png";
let yellow = "art_files/franks_books_logo.png";

// Add event handlers to the list items
document.getElementById("illustrator").onclick = function() {
    document.getElementById("keywordImage").src = blue;
}
document.getElementById("designer").onclick = function() {
    document.getElementById("keywordImage").src = yellow;
}
document.getElementById("developer").onclick = function() {
    document.getElementById("keywordImage").src = pink;
}
