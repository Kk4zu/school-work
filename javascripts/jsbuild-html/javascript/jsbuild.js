//header declaration
const header = document.createElement("header");
const headerHeading = document.createElement("h1");
const headerHeadingText = document.createTextNode("Tämä on artikkelin otsikko");
const headerParagraph = document.createElement("p");
const headerParagraphText = document.createTextNode(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corrupti et facere incidunt, quis amet cupiditate quaerat rem! Vitae saepe ducimus atque nihil natus cum, cupiditate sit. Recusandae, consequatur a!",
);



// Header construction
header.classList.add("ylatunniste");
header.classList.add("bordered");
headerHeading.appendChild(headerHeadingText);
headerParagraph.appendChild(headerParagraphText);
header.appendChild(headerHeading);
header.appendChild(headerParagraph);
document.body.appendChild(header);



// Section declaration
const section = document.createElement("section");
const sectionParagraph = document.createElement("p");
const sectionParagraphText = document.createTextNode(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corrupti et facere incidunt, quis amet cupiditate quaerat rem! Vitae saepe ducimus atque nihil natus cum, cupiditate sit. Recusandae, consequatur a!",
);
const sectionFigure = document.createElement("figure");
const sectionImage = document.createElement("img");



// Section construction
section.id = "rinnakkain";
section.classList.add("bordered");
sectionFigure.id = "kuvanpaikka";
sectionImage.src =
    "https://dri.es/files/images/blog/javascript-powered-multichannel.gif";
sectionParagraph.appendChild(sectionParagraphText);
section.appendChild(sectionParagraph);
sectionFigure.appendChild(sectionImage);
section.appendChild(sectionFigure);
document.body.appendChild(section);



// Section declaration
const footer = document.createElement("footer");
footer.classList.add("bordered");
const footerParagraph = document.createElement("p");
const footerParagraphText = document.createTextNode("Kasper Keske");



// Section construction
footerParagraph.appendChild(footerParagraphText);
footer.appendChild(footerParagraph);
document.body.appendChild(footer);


