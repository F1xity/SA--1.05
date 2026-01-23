const templateFile = await fetch("./component/10-footer/TemplateFooter.html");
const template = await templateFile.text();

const templateSectionFile = await fetch("./component/10-footer/TemplateFooterSection.html");
const templateSection = await templateSectionFile.text();

let Footer = {};

Footer.format = function (data, css = "") {
    let html = template;
    let sectionsHTML = "";

    for (let section of data.sections) {
        let sectionHTML = templateSection;

        let titleClass = section.class ?? "footer__section__name";

        sectionHTML = sectionHTML.replaceAll(
            "{{title}}",
            `<h1 class="${titleClass}">${section.title}</h1>`
        );

        if (section.description) {
            sectionHTML = sectionHTML.replaceAll(
                "{{content}}",
                `<p class="footer__section__content">${section.description}</p>`
            );
        }
        if (section.links) {
            let linksHTML = "";
            for (let link of section.links) {
                linksHTML += `<p class="footer__section__content">${link}</p>`;
            }
            sectionHTML = sectionHTML.replaceAll("{{content}}", linksHTML);
        }
        if (section.email) {
            sectionHTML = sectionHTML.replaceAll(
                "{{content}}",
                `
                <p class="footer__section__content">${section.description}</p>
                <div class="footer__email">
                    <input class="footer__email__input" type="email" placeholder="${section.email.placeholder}">
                    <a href="#" class="footer__email__btn">${section.email.button}</a>
                </div>
                `
            );
        }

        sectionsHTML += sectionHTML;
    }

    html = html.replaceAll("{{sections}}", sectionsHTML);
    return html;
};

Footer.render = function (where, data, css = "") {
    let node = document.querySelector(where);
    node.innerHTML += Footer.format(data, css);
};

export { Footer };