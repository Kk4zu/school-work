function myFunction() {
  //make classes for layout with JS
  var element = document.querySelectorAll(".ul-item");
  element.forEach((element) => element.classList.toggle("genre-ul"));

  var element = document.querySelectorAll(".main-ul");
  element.forEach((element) => element.classList.toggle("ul-main"));

  var element = document.querySelectorAll(".genre");
  element.forEach((element) => element.classList.toggle("genre-li"));

  var element = document.querySelectorAll(".table-plays");
  element.forEach((element) => element.classList.toggle("tplays"));

  var element = document.querySelectorAll(".table-sonnets");
  element.forEach((element) => element.classList.toggle("tsonnets"));

  let rows = document.querySelectorAll("td");
  rows.forEach((element) => element.classList.toggle("td-table"));

  var element = document.querySelectorAll("a");
  element.forEach((element) => element.classList.toggle("dotted"));

  // pdf-icons visible

  console.log(links);
  var links = document.links; //Get all links in the document
  for (var i = 0; i < links.length; i++) {
    //Loop through each link
    thisHrefLast = links[i].href.slice(links[i].href.length - 3); // katkaistaan href:n 3 viimeistä merkkiä
    console.log(thisHrefLast);
    //Select the last section, which should be the extension

    if (thisHrefLast.toLowerCase() == "pdf") {
      //If the extension is "pdf" (case insensitive)...
      console.log(thisHrefLast);
      document
        .getElementsByTagName("a")
        [i].insertAdjacentHTML("afterend", '  <i class="fas fa-file-pdf"></i>');
    }
  }

   {

    var links = document.links; //Get all links in the document
    for (var i = 0; i < links.length; i++) {
      thisHrefFirst = links[i].href.substring(0, 4);
      console.log(thisHrefFirst);

      if (thisHrefFirst.toLowerCase() == "mail") {
        // if first 4 digits are "mail"
        console.log(thisHrefFirst);
        document
          .getElementsByTagName("a")
          [i].insertAdjacentHTML(
            "beforebegin",
            '<i class="fas fa-envelope"></i> '
          );
      }
    }
    changeOuterLinks();
  }
  // CSS-rules fa-external-link-alt added to links, wich host property dosent start with "127."
  function changeOuterLinks() {
    var links = document.links; //Get all links in the document
    for (var i = 0; i < links.length; i++) {
      var host = links[i].host.substring(0, 4);
      if (host !== "127.") {
        document
          .getElementsByTagName("a")
          [i].insertAdjacentHTML(
            "beforebegin",
            '<i class="fas fa-external-link-alt"></i> '
          );
      }
    }
  }
}
