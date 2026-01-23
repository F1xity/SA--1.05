const templateFile = await fetch("./components/11-Faq/template.html");
const template = await templateFile.text();

let Faq = {};

Faq.format = function(data) {
    let html = template;
    let itemsHTML = "";

    const itemTemplate = `
        <div class="faq-item">
            <details class="faq-details">
                <summary class="faq-question">{{question}}</summary>
                <div class="faq-answer">
                    <p>{{answer}}</p>
                </div>
            </details>
        </div>
    `;

    data.questions.forEach(item => {
        let block = itemTemplate;
        block = block.replaceAll("{{question}}", item.q);
        block = block.replaceAll("{{answer}}", item.a);
        itemsHTML += block;
    });

    html = html.replaceAll("{{title}}", data.title);
    html = html.replaceAll("{{faqItems}}", itemsHTML);
    
    return html;
};

Faq.render = function(where, data) {
    const node = document.querySelector(where);
    if (node) node.innerHTML = Faq.format(data);
};

export { Faq };