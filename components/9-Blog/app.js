const templateFile = await fetch("./components/9-Blog/template.html");
const template = await templateFile.text();

let Blog = {};

Blog.format = function(data) {
    let html = template;
    let cardsHTML = "";

    const cardTemplate = `
        <article class="blog-card">
            <div class="blog-image-container">
                <img src="{{img}}" alt="{{title}}" class="blog-img">
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span class="blog-author">By {{author}}</span>
                    <span class="blog-dot">•</span>
                    <span class="blog-date">{{date}}</span>
                    <span class="blog-dot">•</span>
                    <span class="blog-badge">{{category}}</span>
                </div>
                <h3 class="blog-title">{{title}}</h3>
                <p class="blog-desc">{{desc}}</p>
                <a href="#" class="blog-link">Read More →</a>
            </div>
        </article>
    `;

    data.articles.forEach(art => {
        let card = cardTemplate;
        card = card.replaceAll("{{author}}", art.author);
        card = card.replaceAll("{{date}}", art.date);
        card = card.replaceAll("{{category}}", art.category);
        card = card.replaceAll("{{title}}", art.title);
        card = card.replaceAll("{{desc}}", art.description);
        card = card.replaceAll("{{img}}", art.img);
        cardsHTML += card;
    });

    html = html.replaceAll("{{title}}", data.title);
    html = html.replaceAll("{{blogCards}}", cardsHTML);
    
    return html;
};

Blog.render = function(where, data) {
    const node = document.querySelector(where);
    if (node) node.innerHTML = Blog.format(data);
};

export { Blog };