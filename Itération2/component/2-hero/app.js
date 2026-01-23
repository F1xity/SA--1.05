const templateFile = await fetch("./component/2-hero/TemplateHero.html");
const template = await templateFile.text();

const templateBtnFile = await fetch("./component/2-hero/TemplateHeroBtn.html");
const templateBtn = await templateBtnFile.text();

let Hero = {};

Hero.format = function(data, css=""){
    let html = template;
    let menuHTML = "";
    for (let menu of data.btn){
        let btn = templateBtn;
        btn = btn.replaceAll("{{link}}", menu.link);
        btn = btn.replaceAll("{{name}}", menu.name);
        btn = btn.replaceAll("{{num}}", menu.num);
        menuHTML += btn;
    }

    
    html = html.replaceAll("{{title}}", data.title);
    html = html.replaceAll("{{texte}}", data.texte);
    html = html.replaceAll("{{boutons}}", menuHTML);
    html = html.replaceAll("{{img}}", data.img);
    return html;
}

Hero.render = function(where, data, css=""){
    let node = document.querySelector(where);
    node.innerHTML += Hero.format(data, css);
}

export { Hero };

    // ↓ IMPORTER DANS LE HTML ↓

    // import { Navigation } from "./component/Navigation/app.js";
    // import { NavigationData } from "./data/NavigationData.js";
    // Navigation.render("#content", NavigationData[0]);
