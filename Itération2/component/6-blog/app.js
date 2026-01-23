const templateFile = await fetch("./component/6-blog/TemplateBlog.html");
const template = await templateFile.text();

const templateRubFile = await fetch("./component/6-blog/TemplateBlogRubrique.html");
const templateRub = await templateRubFile.text();

let Blog = {};

Blog.format = function(data, css=""){
    let html = template;
    let menuHTML = "";
    for (let menu of data.rubriques){
        let rub = templateRub;
        rub = rub.replaceAll("{{img}}", menu.img);
        rub = rub.replaceAll("{{name}}", menu.name);
        rub = rub.replaceAll("{{date}}", menu.date);
        rub = rub.replaceAll("{{work}}", menu.work);
        rub = rub.replaceAll("{{title}}", menu.title);
        rub = rub.replaceAll("{{texte}}", menu.texte);
        menuHTML += rub;
    }


    html = html.replaceAll("{{title}}", data.title);
    html = html.replaceAll("{{texte}}", data.texte);
    html = html.replaceAll("{{rubriques}}", menuHTML);
    return html;
}

Blog.render = function(where, data, css=""){
    let node = document.querySelector(where);
    node.innerHTML += Blog.format(data, css);
}

export { Blog };

    // ↓ IMPORTER DANS LE HTML ↓

    // import { Navigation } from "./component/Navigation/app.js";
    // import { NavigationData } from "./data/NavigationData.js";
    // Navigation.render("#content", NavigationData[0]);
