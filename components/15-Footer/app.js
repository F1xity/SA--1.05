const templateFile = await fetch("./components/15-Footer/template.html");
const template = await templateFile.text();

let Footer = {};

Footer.format = function(data) {
    let html = template;
    let columnsHTML = "";

    data.columns.forEach(col => {
        let links = "";
        col.links.forEach(link => {
            links += `<li><a href="${link.url}">${link.label}</a></li>`;
        });

        columnsHTML += `
            <div class="footer-col">
                <h3>${col.title}</h3>
                <ul>${links}</ul>
            </div>
        `;
    });

    html = html.replaceAll("{{logo}}", data.logo);
    html = html.replaceAll("{{description}}", data.description);
    html = html.replaceAll("{{footerColumns}}", columnsHTML);
    html = html.replaceAll("{{copyright}}", data.copyright);
    
    return html;
};

Footer.render = function(where, data) {
    const node = document.querySelector(where);
    if (node) node.innerHTML = Footer.format(data);
};

export { Footer };