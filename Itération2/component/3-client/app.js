const templateFile = await fetch("./component/3-client/TemplateClient.html");
const template = await templateFile.text();

const templateImgFile = await fetch("./component/3-client/TemplateClientImg.html");
const templateImg = await templateImgFile.text();

let Client = {};

Client.format = function(data, css=""){
    let html = template;
    let menuHTML = "";
    for (let menu of data.imgs){
        let img = templateImg;
        img = img.replaceAll("{{img}}", menu.img);
        menuHTML += img;
    }


    html = html.replaceAll("{{title}}", data.title);
    html = html.replaceAll("{{subtitle}}", data.subtitle);
    html = html.replaceAll("{{imgs}}", menuHTML);
    return html;
}

Client.render = function(where, data, css=""){
    let node = document.querySelector(where);
    node.innerHTML += Client.format(data, css);
}

export { Client };

    // ↓ IMPORTER DANS LE HTML ↓

    // import { Navigation } from "./component/Navigation/app.js";
    // import { NavigationData } from "./data/NavigationData.js";
    // Navigation.render("#content", NavigationData[0]);
