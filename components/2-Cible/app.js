const templateFile = await fetch("./components/2-Cible/template.html");
const template = await templateFile.text();

let Cible = {};

Cible.format = function(data) {
    let html = template;
    let cardsHTML = "";

    const cardTemplate = `
        <div class="cible-card">
            <div class="cible-emoji">{{emoji}}</div>
            <div class="cible-text">
                <h3>{{role}}</h3>
                <p>{{description}}</p>
            </div>
        </div>
    `;

    data.profiles.forEach(item => {
        let block = cardTemplate;
        block = block.replaceAll("{{emoji}}", item.emoji);
        block = block.replaceAll("{{role}}", item.role);
        block = block.replaceAll("{{description}}", item.description);
        cardsHTML += block;
    });

    html = html.replaceAll("{{title}}", data.title);
    html = html.replaceAll("{{subtitle}}", data.subtitle);
    html = html.replaceAll("{{cibleCards}}", cardsHTML);
    
    return html;
};

Cible.render = function(where, data) {
    const node = document.querySelector(where);
    if (node) node.innerHTML = Cible.format(data);
};

export { Cible };