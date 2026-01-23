const templateFile = await fetch("./components/10-Help/template.html");
const template = await templateFile.text();

let Help = {};

Help.format = function(data) {
    let html = template;
    let cardsHTML = "";

    const cardTemplate = `
        <div class="help-card">
            <div class="help-icon">{{icon}}</div>
            <h3 class="help-title">{{title}}</h3>
            <p class="help-desc">{{desc}}</p>
            <button class="help-btn">{{btnText}}</button>
        </div>
    `;

    data.supportOptions.forEach(opt => {
        let block = cardTemplate;
        block = block.replaceAll("{{icon}}", opt.icon);
        block = block.replaceAll("{{title}}", opt.title);
        block = block.replaceAll("{{desc}}", opt.desc);
        block = block.replaceAll("{{btnText}}", opt.btnText);
        cardsHTML += block;
    });

    html = html.replaceAll("{{title}}", data.title);
    html = html.replaceAll("{{subtitle}}", data.subtitle);
    html = html.replaceAll("{{helpCards}}", cardsHTML);
    
    return html;
};

Help.render = function(where, data) {
    const node = document.querySelector(where);
    if (node) node.innerHTML = Help.format(data);
};

export { Help };