const templateFile = await fetch("./component/1-nav/TemplateNav.html");
const template = await templateFile.text();

const templateLiFile = await fetch("./component/1-nav/TemplateNavLi.html");
const templateLi = await templateLiFile.text();

let Navigation = {};

Navigation.format = function(data, css=""){
    let html = template;
    let menuHTML = "";
    for (let menu of data.list){
        let li = templateLi;
        li = li.replaceAll("{{link}}", menu.link);
        li = li.replaceAll("{{name}}", menu.item);
        menuHTML += li;
    }


    html = html.replaceAll("{{title}}", data.title);
    html = html.replaceAll("{{nav-item}}", menuHTML);
    return html;
}

Navigation.render = function(where, data, css=""){
    let node = document.querySelector(where);
    node.innerHTML += Navigation.format(data, css);
}

export { Navigation };

    // ↓ IMPORTER DANS LE HTML ↓

    // import { Navigation } from "./component/Navigation/app.js";
    // import { NavigationData } from "./data/NavigationData.js";
    // Navigation.render("#content", NavigationData[0]);
