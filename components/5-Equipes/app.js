const templateFile = await fetch("./components/5-Equipes/template.html");
const template = await templateFile.text();

let Equipes = {};

Equipes.format = function(data) {
    let html = template;
    let rowsHTML = "";

    // Template pour une ligne (row)
    const rowTemplate = `
        <div class="equipes-row">
            <div class="equipes-text">
                <h3>{{rowTitle}}</h3>
                <p>{{rowDesc}}</p>
            </div>
            <div class="equipes-image">
                <img src="{{rowImg}}" alt="{{rowAlt}}">
            </div>
        </div>
    `;

    data.items.forEach((item) => {
        let row = rowTemplate;
        row = row.replace("{{rowTitle}}", item.title);
        row = row.replace("{{rowDesc}}", item.description);
        row = row.replace("{{rowImg}}", item.img);
        row = row.replace("{{rowAlt}}", item.alt);
        rowsHTML += row;
    });

    html = html.replace("{{title}}", data.title);
    html = html.replace("{{intro}}", data.intro);
    html = html.replace("{{equipesRows}}", rowsHTML);
    
    return html;
};

Equipes.render = function(where, data) {
    const node = document.querySelector(where);
    if (node) {
        node.innerHTML = Equipes.format(data);
    }
};

export { Equipes };