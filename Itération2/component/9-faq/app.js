const templateFile = await fetch("./component/9-faq/TemplateFaq.html");
const template = await templateFile.text();

const templateQuestionFile = await fetch("./component/9-faq/TemplateFaqQuestion.html");
const templateQuestion = await templateQuestionFile.text();

let Faq = {};

Faq.format = function(data, css=""){
    let html = template;
    let menuHTML = "";
    for (let menu of data.questions){
        let question = templateQuestion;
        question = question.replaceAll("{{title}}", menu.title);
        menuHTML += question;
    }


    html = html.replaceAll("{{title}}", data.title);
    html = html.replaceAll("{{texte}}", data.texte);
    html = html.replaceAll("{{questions}}", menuHTML);
    return html;
}

Faq.render = function(where, data, css=""){
    let node = document.querySelector(where);
    node.innerHTML += Faq.format(data, css);
}

export { Faq };

    // ↓ IMPORTER DANS LE HTML ↓

    // import { Navigation } from "./component/Navigation/app.js";
    // import { NavigationData } from "./data/NavigationData.js";
    // Navigation.render("#content", NavigationData[0]);
