const templateFile = await fetch("./components/14-Newsletter/template.html");
const template = await templateFile.text();

let Newsletter = {};

Newsletter.format = function(data) {
    let html = template;
    
    html = html.replaceAll("{{title}}", data.title);
    html = html.replaceAll("{{description}}", data.description);
    html = html.replaceAll("{{placeholder}}", data.placeholder);
    html = html.replaceAll("{{buttonText}}", data.buttonText);
    html = html.replaceAll("{{legalText}}", data.legalText);
    
    return html;
};

Newsletter.render = function(where, data) {
    const node = document.querySelector(where);
    if (node) {
        node.innerHTML = Newsletter.format(data);
    }
};

export { Newsletter };