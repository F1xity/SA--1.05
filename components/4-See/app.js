const templateFile = await fetch("./components/4-See/Template/TemplateSee.html");
const template = await templateFile.text();

let See = {};

See.format = function(data){
    let html = "";
    for(let item of data){
        let block = template;
        
        block = block.replaceAll("{{img}}", item.img);
        block = block.replaceAll("{{ClrText}}", item.ClrText);
        block = block.replaceAll("{{title}}", item.title);
        block = block.replaceAll("{{texte}}", item.texte);
        block = block.replaceAll("{{link}}", item.link);
        block = block.replaceAll("{{btn}}", item.btn);
        block = block.replaceAll("{{clrBtn}}", item.clrBtn);
        block = block.replaceAll("{{variant}}", item.variant); 
        
        html += block;
    }
    return html;
}

See.render = function(where, data){
    let node = document.querySelector(where);
    if(node){
        node.innerHTML = See.format(data);
    }
}

export { See };