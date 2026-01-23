const templateFile = await fetch("./components/12-Fondateur/template.html");
const template = await templateFile.text();

let Fondateur = {};

Fondateur.format = function(data) {
    let html = template;
    let linksHTML = "";

    data.socials.forEach(s => {
        linksHTML += `<a href="${s.link}" class="fondateur-link">${s.platform}</a>`;
    });

    html = html.replaceAll("{{title}}", data.title);
    html = html.replaceAll("{{name}}", data.name);
    html = html.replaceAll("{{role}}", data.role);
    html = html.replaceAll("{{bio}}", data.bio);
    html = html.replaceAll("{{quote}}", data.quote);
    html = html.replaceAll("{{img}}", data.img);
    html = html.replaceAll("{{socialLinks}}", linksHTML);
    
    return html;
};

Fondateur.render = function(where, data) {
    const node = document.querySelector(where);
    if (node) node.innerHTML = Fondateur.format(data);
};

export { Fondateur };