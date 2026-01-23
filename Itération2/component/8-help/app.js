const templateFile = await fetch("./component/8-help/TemplateHelp.html");
const template = await templateFile.text();

const templateContactFile = await fetch("./component/8-help/TemplateHelpContact.html");
const templateContact = await templateContactFile.text();

let Help = {};

Help.format = function(data, css=""){
    let html = template;
    let menuHTML = "";
    for (let menu of data.contact.section){
        let contact = templateContact;
        contact = contact.replaceAll("{{img}}", menu.img);
        contact = contact.replaceAll("{{alt}}", menu.alt);
        contact = contact.replaceAll("{{name}}", menu.name);
        contact = contact.replaceAll("{{content}}", menu.content);
        menuHTML += contact;
    }


    html = html.replaceAll("{{title}}", data.title);
    html = html.replaceAll("{{texte}}", data.texte);
    html = html.replaceAll("{{name}}", data.name);
    html = html.replaceAll("{{contact}}", menuHTML);
    return html;
}

Help.render = function(where, data, css=""){
    let node = document.querySelector(where);
    node.innerHTML += Help.format(data, css);
}

export { Help };

    // ↓ IMPORTER DANS LE HTML ↓

    // import { Navigation } from "./component/Navigation/app.js";
    // import { NavigationData } from "./data/NavigationData.js";
    // Navigation.render("#content", NavigationData[0]);
