const templateFile = await fetch("./component/4-content/TemplateContent.html");
const template = await templateFile.text();

const templateCardFile = await fetch("./component/4-content/TemplateContentCard.html");
const templateCard = await templateCardFile.text();

let Content = {};

Content.format = function(data, css=""){
    let html = template;
    let menuHTML = "";
    for (let menu of data.cards){
        let card = templateCard;
        card = card.replaceAll("{{img}}", menu.img);
        card = card.replaceAll("{{num}}", menu.num);
        card = card.replaceAll("{{name}}", menu.name);
        card = card.replaceAll("{{texte}}", menu.texte);
        menuHTML += card;
    }


    html = html.replaceAll("{{title}}", data.title);
    html = html.replaceAll("{{texte}}", data.texte);
    html = html.replaceAll("{{cards}}", menuHTML);
    return html;
}

Content.render = function(where, data, css=""){
    let node = document.querySelector(where);
    node.innerHTML += Content.format(data, css);
}

export { Content };

    // ↓ IMPORTER DANS LE HTML ↓

    // import { Navigation } from "./component/Navigation/app.js";
    // import { NavigationData } from "./data/NavigationData.js";
    // Navigation.render("#content", NavigationData[0]);
