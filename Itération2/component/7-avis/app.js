const templateFile = await fetch("./component/7-avis/TemplateAvis.html");
const template = await templateFile.text();

const templateSharedFile = await fetch("./component/7-avis/TemplateAvisShared.html");
const templateShared = await templateSharedFile.text();

const templateNumFile = await fetch("./component/7-avis/TemplateAvisNum.html");
const templateNum = await templateNumFile.text();

let Avis = {};

Avis.format = function(data, css=""){
    let html = template;
    let menuHTML = "";
    for (let menu of data.avis){
        let shr = templateShared;
        shr = shr.replaceAll("{{img}}", menu.img);
        shr = shr.replaceAll("{{texte}}", menu.texte);
        shr = shr.replaceAll("{{person}}", menu.person);
        menuHTML += shr;
    }

    let numHTML = "";
    for (let num of data.num){
        let nb = templateNum;
        nb = nb.replaceAll("{{num}}", num);
        numHTML += nb
    }

    html = html.replaceAll("{{title}}", data.title);
    html = html.replaceAll("{{num}}", numHTML);
    html = html.replaceAll("{{avis}}", menuHTML);
    return html;
}

Avis.render = function(where, data, css=""){
    let node = document.querySelector(where);
    node.innerHTML += Avis.format(data, css);
}

export { Avis };