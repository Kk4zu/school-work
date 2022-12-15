//find html body tag
const runko = document.getElementsByTagName("body")[0];
const osa = document.createElement("div");
//put div in body 
osa.setAttribute("id", "div1");
runko.appendChild(osa);
//add p and text inside div
const kappale = document.createElement("p");
kappale.setAttribute("id", "p1");
const texti = document.createTextNode("Tämä on kappaleen texti.");
kappale.appendChild(texti);
osa.appendChild(kappale);

const kappale2 = document.createElement("p");
kappale2.setAttribute("id", "p2");
const texti2 = document.createTextNode("Tämä on kappaleen toinen texti.");
kappale2.appendChild(texti2);
osa.appendChild(kappale2);

const kappale3 = document.createElement("p");
kappale3.setAttribute("id", "p3");
const texti3 = document.createTextNode("Tämä on kappaleen kolmas texti.");
kappale3.appendChild(texti3);
osa.appendChild(kappale3);
