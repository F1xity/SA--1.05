const templateFile = await fetch("./components/1-Navigation/Template/TemplateNav.html");
const template = await templateFile.text();

const templateLiFile = await fetch("./components/1-Navigation/Template/TemplateNavLi.html");
const templateLi = await templateLiFile.text();

let Navigation = {};

Navigation.format = function(data, css=""){
    let html = template;
    let menuHTML = "";
    for (let menu of data.navItem){
        let li = templateLi;
        li = li.replaceAll("{{link}}", menu.link);
        li = li.replaceAll("{{name}}", menu.name);
        menuHTML += li;
    }

    html = html.replaceAll("{{clr}}", data.clr);
    html = html.replaceAll("{{img}}", data.img);
    html = html.replaceAll("{{burger}}", data.burger);
    html = html.replaceAll("{{shop}}", data.shop);
    html = html.replaceAll("{{navItem}}", menuHTML);
    return html;
}

Navigation.render = function(where, data, css=""){
    let node = document.querySelector(where);
    node.innerHTML += Navigation.format(data, css);
}

export { Navigation };
