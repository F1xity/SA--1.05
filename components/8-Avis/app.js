const templateFile = await fetch("./components/8-Avis/template.html");
const template = await templateFile.text();

let Avis = {};

Avis.format = function(data) {
    let html = template;
    let cardsHTML = "";

    const cardTemplate = `
        <div class="avis-card">
            <div class="avis-stars">{{stars}}</div>
            <p class="avis-comment">"{{comment}}"</p>
            <div class="avis-user">
                <img src="{{img}}" alt="{{name}}" class="avis-avatar">
                <div class="avis-info">
                    <h2 class="avis-name">{{name}}</h2>
                    <span class="avis-role">{{role}}</span>
                </div>
            </div>
        </div>
    `;

    data.reviews.forEach(review => {
        let card = cardTemplate;
        
        // Génération des étoiles (★)
        let stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);

        card = card.replaceAll("{{stars}}", stars);
        card = card.replaceAll("{{comment}}", review.comment);
        card = card.replaceAll("{{img}}", review.img);
        card = card.replaceAll("{{name}}", review.name);
        card = card.replaceAll("{{role}}", review.role);
        
        cardsHTML += card;
    });

    html = html.replaceAll("{{title}}", data.title);
    html = html.replaceAll("{{avisCards}}", cardsHTML);
    
    return html;
};

Avis.render = function(where, data) {
    const node = document.querySelector(where);
    if (node) node.innerHTML = Avis.format(data);
};

export { Avis };