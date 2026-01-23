let OffresData = {
    title: "Choisissez votre forfait",
    subtitle: "Des options flexibles pour tous les créateurs, du débutant au professionnel.",
    plans: [
        {
            name: "Starter",
            price: "49€",
            period: "/mois",
            features: ["Accès Open Space", "Wi-Fi Très Haut Débit", "Café illimité", "Communauté Discord"],
            buttonText: "Commencer",
            featured: false
        },
        {
            name: "Creator",
            price: "199€",
            period: "/mois",
            features: ["Studio Streaming (5h/sem)", "Accès Équipes Fixi", "Matériel Lumière inclus", "Casier sécurisé"],
            buttonText: "Choisir Creator",
            featured: true // Pour mettre cette offre en avant
        },
        {
            name: "Pro",
            price: "450€",
            period: "/mois",
            features: ["Studio Musique & Vidéo illimité", "Coaching perso mensuel", "Badge d'accès 24/7", "Invitations évents VIP"],
            buttonText: "Passer Pro",
            featured: false
        }
    ]
};

export { OffresData };