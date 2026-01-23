const templateFile = await fetch("./components/5-Bio/Template/TemplateBio.html");
const template = await templateFile.text();

let Bio = {};

Bio.format = function(data, css = "") {
    let block = template;

    block = block.replaceAll("{{titleBefore}}", data.titleBefore);
    block = block.replaceAll("{{titleHighlight}}", data.titleHighlight);
    block = block.replaceAll("{{clrText}}", data.clrText);
    block = block.replaceAll("{{titleAfter}}", data.titleAfter);
    block = block.replaceAll("{{description}}", data.description);
    block = block.replaceAll("{{image}}", data.image);
    block = block.replaceAll("{{imageAlt}}", data.imageAlt);

    return block;
};

Bio.render = function(where, data, css = "") {
    let node = document.querySelector(where);
    node.innerHTML += Bio.format(data, css);
};

export { Bio };
