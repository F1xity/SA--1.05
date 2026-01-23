const templateFile = await fetch("./components/3-Buy/Template/TemplateBuy.html");
const template = await templateFile.text();

let Buy = {};

Buy.format = function(data, css=""){
    let html = "";
    for(let item of data){
        let block = template;
        block = block.replaceAll("{{img}}", item.img);
        block = block.replaceAll("{{clrShadow}}", item.clrShadow);
        block = block.replaceAll("{{title}}", item.title);
        block = block.replaceAll("{{link}}", item.link);
        block = block.replaceAll("{{btn}}", item.btn);
        block = block.replaceAll("{{arrow}}", `<img src="${item.arrow}" alt="ERROR">`);
        html += block;
    }
    return html;
}

Buy.render = function(where, data, css=""){
    let node = document.querySelector(where);
    node.innerHTML += Buy.format(data, css);
}

export { Buy };
