const templateFile = await fetch("./components/2-Preview/Template/TemplatePreview.html");
const template = await templateFile.text();

let Preview = {};

Preview.format = function(data, css=""){
    let html = template;

    html = html.replaceAll("{{imgMobile}}", data.imgMobile);
    html = html.replaceAll("{{imgDesktop}}", data.imgDesktop);
    html = html.replaceAll("{{new}}", data.new);
    html = html.replaceAll("{{name}}", data.name);
    html = html.replaceAll("{{texte}}", data.texte);
    html = html.replaceAll("{{clrTxt}}", data.clrTxt);
    html = html.replaceAll("{{link}}", data.link);
    html = html.replaceAll("{{btn}}", data.btn);
    html = html.replaceAll("{{clrBtnBg}}", data.clrBtnBg);
    return html;
}

Preview.render = function(where, data, css=""){
    let node = document.querySelector(where);
    node.innerHTML += Preview.format(data, css);
}

export { Preview };
