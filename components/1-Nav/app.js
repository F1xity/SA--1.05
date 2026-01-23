const templateFile = await fetch("./components/1-Nav/template.html");
const template = await templateFile.text();

let Nav = {};

Nav.format = function(data) {
    let html = template;
    let menuHTML = "";

    // Template pour chaque lien du menu
    for (let item of data.navList) {
        let li = `<li class="nav-item"><a href="{{link}}">{{label}}</a></li>`;
        li = li.replace("{{link}}", item.link);
        li = li.replace("{{label}}", item.label);
        menuHTML += li;
    }

    html = html.replace("{{logo}}", data.logo);
    html = html.replace("{{menuItems}}", menuHTML);
    return html;
};

Nav.render = function(where, data) {
    let node = document.querySelector(where);
    node.innerHTML = Nav.format(data);
};

export { Nav };