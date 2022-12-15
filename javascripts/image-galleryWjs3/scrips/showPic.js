function showPic(wichpic) {
    var source = wichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    var text =wichpic.getAttribute("title")
    var description = document.getElementById("description")
    description.firstChild.nodeValue = text;
}