const templateFile = await fetch("./components/7-Offres/template.html");
const template = await templateFile.text();

let Offres = {};

Offres.format = function(data) {
    let html = template;
    let cardsHTML = "";

    const cardTemplate = `
        <div class="offres-card {{featuredClass}}">
            <h3 class="offres-name">{{name}}</h3>
            <div class="offres-price">{{price}}<span>{{period}}</span></div>
            <ul class="offres-features">
                {{featuresList}}
            </ul>
            <button class="offres-btn">{{btnText}}</button>
        </div>
    `;

    data.plans.forEach(plan => {
        let card = cardTemplate;
        
        // Gestion de la liste à puce interne
        let listHTML = "";
        plan.features.forEach(f => {
            listHTML += `<li>✓ ${f}</li>`;
        });

        card = card.replace("{{name}}", plan.name);
        card = card.replace("{{price}}", plan.price);
        card = card.replace("{{period}}", plan.period);
        card = card.replace("{{btnText}}", plan.buttonText);
        card = card.replace("{{featuresList}}", listHTML);
        card = card.replace("{{featuredClass}}", plan.featured ? "featured" : "");
        
        cardsHTML += card;
    });

    html = html.replace("{{title}}", data.title);
    html = html.replace("{{subtitle}}", data.subtitle);
    html = html.replace("{{offresCards}}", cardsHTML);
    
    return html;
};

Offres.render = function(where, data) {
    const node = document.querySelector(where);
    if (node) node.innerHTML = Offres.format(data);
};

export { Offres };