const templateFile = await fetch("./components/6-Avantages/template.html");
const template = await templateFile.text();

let Avantages = {};

Avantages.format = function(data) {
    let html = template;
    let itemsHTML = "";

    const itemTemplate = `
        <div class="avantages-item">
            <div class="avantages-icon">{{icon}}</div>
            <h3 class="avantages-title">{{itemTitle}}</h3>
            <p class="avantages-desc">{{itemDesc}}</p>
        </div>
    `;

    data.items.forEach(item => {
        let block = itemTemplate;
        block = block.replace("{{icon}}", item.icon);
        block = block.replace("{{itemTitle}}", item.title);
        block = block.replace("{{itemDesc}}", item.desc);
        itemsHTML += block;
    });

    html = html.replace("{{title}}", data.title);
    html = html.replace("{{avantagesItems}}", itemsHTML);
    
    return html;
};

Avantages.render = function(where, data) {
    const node = document.querySelector(where);
    if (node) node.innerHTML = Avantages.format(data);
};

export { Avantages };