const templateFile = await fetch("./components/3-Cta/template.html");
const template = await templateFile.text();

let Cta = {};

Cta.format = function(data) {
    let html = template;
    
    html = html.replaceAll("{{title}}", data.title);
    html = html.replaceAll("{{description}}", data.description);
    html = html.replaceAll("{{primaryBtn}}", data.primaryBtn);
    html = html.replaceAll("{{secondaryBtn}}", data.secondaryBtn);
    
    return html;
};

Cta.render = function(where, data) {
    const node = document.querySelector(where);
    if (node) {
        node.innerHTML = Cta.format(data);
        // On applique l'image de fond dynamiquement
        node.querySelector('.cta-section').style.backgroundImage = `url('${data.backgroundImage}')`;
    }
};

export { Cta };