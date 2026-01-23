const templateFile = await fetch("./components/6-Footer/Template/TemplateFooter.html");
const template = await templateFile.text();

const templateLiFile = await fetch("./components/6-Footer/Template/TemplateFooterLi.html");
const templateLi = await templateLiFile.text();

const templateSocialFile = await fetch("./components/6-Footer/Template/TemplateFooterSocial.html");
const templateSocial = await templateSocialFile.text();

let Footer = {};

Footer.format = function(data, css = "") {

    let navHTML = "";
    for (let item of data.nav) {
        let li = templateLi;
        li = li.replaceAll("{{link}}", item.link);
        li = li.replaceAll("{{name}}", item.name);
        navHTML += li;
    }

    let socialHTML = "";
    for (let social of data.socials) {
        let icon = templateSocial;
        icon = icon.replaceAll("{{link}}", social.link);
        icon = icon.replaceAll("{{icon}}", social.icon);
        icon = icon.replaceAll("{{name}}", social.name);
        socialHTML += icon;
    }
    
    let block = template;
    block = block.replaceAll("{{clrBg}}", data.clrBg);
    block = block.replaceAll("{{logo}}", data.logo);
    block = block.replaceAll("{{navItems}}", navHTML);
    block = block.replaceAll("{{description}}", data.description);
    block = block.replaceAll("{{copyright}}", data.copyright);
    block = block.replaceAll("{{socials}}", socialHTML);

    return block;
};

Footer.render = function(where, data, css = "") {
    let node = document.querySelector(where);
    node.innerHTML += Footer.format(data, css);
};

export { Footer };
