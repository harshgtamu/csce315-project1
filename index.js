function onLoad() {
    page_style = localStorage.getItem("page_stylesheet_name");
    if (page_style === null)
    {
        page_style = "index.css";
    }
    document.getElementById("stylesheet-link").setAttribute("href", page_style);
}

function onStyleChange() {
    var stylesheet = document.getElementById("stylesheet-link");
    if(stylesheet.getAttribute("href") === "index.css") {
        stylesheet.setAttribute("href", "index2.css");
        localStorage.setItem("page_stylesheet_name", "index2.css")
    } else {
        stylesheet.setAttribute("href", "index.css");
        localStorage.setItem("page_stylesheet_name", "index.css")
    }
}