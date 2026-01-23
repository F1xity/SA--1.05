const templateFile = await fetch("./components/4-Locaux/template.html");
const template = await templateFile.text();

let Locaux = {};

Locaux.format = function(data) {
    let html = template;
    let allCardsHTML = "";

    // Template pour une seule carte (templateEnfant)
    const cardTemplate = `
        <article class="locaux-card">
            <div class="locaux-card-content">
                <h3>{{cardTitle}}</h3>
                <p>{{cardDesc}}</p>
            </div>
        </article>
    `;

    for (let card of data.cards) {
        let singleCard = cardTemplate;
        // On remplace les données de la carte
        singleCard = singleCard.replace("{{cardTitle}}", card.title);
        singleCard = singleCard.replace("{{cardDesc}}", card.desc);
        
        allCardsHTML += singleCard;
    }

    // Ici, on remplace le bloc complet dans le template principal
    html = html.replace("{{title}}", data.title);
    html = html.replace("{{locauxCards}}", allCardsHTML);
    
    return html;
};

Locaux.render = function(where, data) {
    const node = document.querySelector(where);
    if (node) {
        node.innerHTML = Locaux.format(data);
    } else {
        console.error(`Le sélecteur ${where} est introuvable.`);
    }
};

export { Locaux };