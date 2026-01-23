const templateFile = await fetch("./components/13-Social/app.js".replaceAll("app.js", "template.html"));
const template = await templateFile.text();

let Social = {};

Social.format = function(data) {
    let html = template;
    let cardsHTML = "";

    const cardTemplate = `
        <a href="{{link}}" class="social-card">
            <div class="social-icon">{{icon}}</div>
            <div class="social-info">
                <span class="social-name">{{name}}</span>
                <span class="social-handle">{{handle}}</span>
            </div>
        </a>
    `;

    data.networks.forEach(net => {
        let block = cardTemplate;
        block = block.replaceAll("{{link}}", net.link);
        block = block.replaceAll("{{icon}}", net.icon);
        block = block.replaceAll("{{name}}", net.name);
        block = block.replaceAll("{{handle}}", net.handle);
        cardsHTML += block;
    });

    html = html.replaceAll("{{title}}", data.title);
    html = html.replaceAll("{{subtitle}}", data.subtitle);
    html = html.replaceAll("{{socialCards}}", cardsHTML);
    
    return html;
};

Social.render = function(where, data) {
    const node = document.querySelector(where);
    if (node) node.innerHTML = Social.format(data);
};

export { Social };