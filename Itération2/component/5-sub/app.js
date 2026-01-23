const templateFile = await fetch("./component/5-sub/TemplateSub.html");
const template = await templateFile.text();

const templatePlanFile = await fetch("./component/5-sub/TemplateSubPlan.html");
const templatePlan = await templatePlanFile.text();



let Sub = {};

Sub.format = function(data, css=""){
    let html = template;
    let menuHTML = "";
    for (let menu of data.plans){
        let planHTML = templatePlan;

        let texteHTML = "";
        for (let Txt of menu.planTexte){
            texteHTML += `<span>${Txt}</span>`;
        }

        
        let badgeHTML = "";
        if (menu.badge){
            badgeHTML = `<span class="sub__plan__value">${menu.badge}</span>`;
        }
        
        planHTML = planHTML.replaceAll("{{num}}", menu.num);
        planHTML = planHTML.replaceAll("{{badge}}", badgeHTML);
        planHTML = planHTML.replaceAll("{{title}}", menu.title);
        planHTML = planHTML.replaceAll("{{prix}}", menu.prix);
        planHTML = planHTML.replaceAll("{{period}}", menu.period);
        planHTML = planHTML.replaceAll("{{planTexte}}", texteHTML);
        planHTML = planHTML.replaceAll("{{btn}}", menu.btn);

        menuHTML += planHTML;
    }


    html = html.replaceAll("{{title}}", data.title);
    html = html.replaceAll("{{texte}}", data.texte);
    html = html.replaceAll("{{plans}}", menuHTML);
    return html;
}

Sub.render = function(where, data, css=""){
    let node = document.querySelector(where);
    node.innerHTML += Sub.format(data, css);
}

export { Sub };

    // ↓ IMPORTER DANS LE HTML ↓

    // import { Navigation } from "./component/Navigation/app.js";
    // import { NavigationData } from "./data/NavigationData.js";
    // Navigation.render("#content", NavigationData[0]);
