function onStyleChange() {
    var stylesheet = document.getElementById("stylesheet-link");
    if(stylesheet.getAttribute("href") === "index.css") {
        stylesheet.setAttribute("href", "index2.css");
    } else {
        stylesheet.setAttribute("href", "index.css");
    }
}