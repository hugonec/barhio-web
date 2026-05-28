export type Lang = "en" | "fr" | "es";

export const LANGS: Lang[] = ["en", "fr", "es"];

type Dict = Record<Lang, string>;

export const t = {
  navCta: {
    en: "Join waitlist",
    fr: "Rejoindre la liste",
    es: "Unirse a la lista",
  },
  heroBadge: {
    en: "Now launching in Barcelona",
    fr: "Lancement à Barcelone",
    es: "Lanzamos en Barcelona",
  },
  heroSub: {
    en: "Save the spots you love. Share with the friends whose taste actually matters. Discover what they recommend — not 10,000 strangers.",
    fr: "Sauvegarde les adresses que tu aimes. Partage avec les amis dont l'avis compte vraiment. Découvre ce qu'ils recommandent — pas 10 000 inconnus.",
    es: "Guarda los sitios que te encantan. Comparte con los amigos cuyo gusto importa de verdad. Descubre lo que ellos recomiendan — no 10.000 desconocidos.",
  },
  heroCta: {
    en: "Get early access",
    fr: "Accès anticipé",
    es: "Acceso anticipado",
  },
  heroFormNote: {
    en: "No spam. Free forever for users.",
    fr: "Pas de spam. Gratuit pour toujours.",
    es: "Sin spam. Gratis para siempre.",
  },
  heroSuccess: {
    en: "✓ You're on the list! We'll reach out when Barhio launches.",
    fr: "✓ Tu es sur la liste ! On te contacte au lancement.",
    es: "✓ ¡Estás en la lista! Te avisamos cuando lancemos.",
  },
  invalidEmail: {
    en: "Please enter a valid email.",
    fr: "Merci d'entrer un email valide.",
    es: "Introduce un email válido.",
  },
  serverError: {
    en: "Something went wrong. Try again in a moment.",
    fr: "Une erreur est survenue. Réessaie dans un instant.",
    es: "Algo salió mal. Inténtalo de nuevo en un momento.",
  },
  featuresEyebrow: {
    en: "What Barhio does",
    fr: "Ce que fait Barhio",
    es: "Qué hace Barhio",
  },
  featuresSub: {
    en: "Google Maps is for navigation. Barhio is for people who actually care about where they eat.",
    fr: "Google Maps c'est pour se repérer. Barhio c'est pour les gens qui aiment vraiment manger.",
    es: "Google Maps es para navegar. Barhio es para quien de verdad disfruta comer.",
  },
  feature1Title: {
    en: "Trust your people",
    fr: "Fais confiance à tes amis",
    es: "Confía en tu gente",
  },
  feature1Body: {
    en: "See the aggregated rating of your friends on every place. Not 10,000 strangers — the three people whose taste you actually trust.",
    fr: "Vois la note agrégée de tes amis sur chaque adresse. Pas 10 000 inconnus — les trois personnes dont tu fais vraiment confiance.",
    es: "Ve la nota media de tus amigos en cada sitio. No 10.000 desconocidos — las tres personas en quienes realmente confías.",
  },
  feature2Title: {
    en: "Rate what you love",
    fr: "Note ce que tu aimes",
    es: "Valora lo que te gusta",
  },
  feature2Body: {
    en: "5 stars, a personal note, visited or wishlist. Your memory, forever organized. Never forget a good spot again.",
    fr: "5 étoiles, une note perso, visité ou wishlist. Ta mémoire food, organisée pour toujours.",
    es: "5 estrellas, una nota personal, visitado o wishlist. Tu memoria gastronómica, organizada para siempre.",
  },
  feature3Title: {
    en: "Share lists in one tap",
    fr: "Partage des listes en un tap",
    es: "Comparte listas en un tap",
  },
  feature3Body: {
    en: 'Build themed lists like "Date Night" or "Best Brunch". Share to WhatsApp in one tap — your friends see a map, no app install needed.',
    fr: 'Crée des listes comme "Dîner en amoureux" ou "Meilleurs brunchs". Partage sur WhatsApp en un tap — avec carte, sans install.',
    es: 'Crea listas como "Cena romántica" o "Mejores brunchs". Comparte por WhatsApp en un tap — con mapa, sin instalar la app.',
  },
  feature4Title: {
    en: "Capture from anywhere",
    fr: "Capture depuis partout",
    es: "Captura desde cualquier sitio",
  },
  feature4Body: {
    en: "Share an Instagram reel or Google Maps link to Barhio. AI extracts the place in under 5 seconds. No typing, no friction.",
    fr: "Partage un reel Instagram ou un lien Google Maps vers Barhio. L'IA extrait l'adresse en moins de 5 secondes. Sans effort.",
    es: "Comparte un reel de Instagram o un enlace de Google Maps a Barhio. La IA extrae el lugar en menos de 5 segundos.",
  },
  howEyebrow: {
    en: "How it works",
    fr: "Comment ça marche",
    es: "Cómo funciona",
  },
  step1Title: {
    en: "Save & rate",
    fr: "Sauvegarde & note",
    es: "Guarda & valora",
  },
  step1Body: {
    en: "Search for a place, or share directly from Instagram or Google Maps. Mark it visited or wishlist. Add your honest rating and a personal note. Your private food memory, forever organized.",
    fr: "Cherche une adresse, ou partage-la directement depuis Instagram ou Google Maps. Marque-la visitée ou wishlist. Ajoute ta note honnête et un commentaire perso. Ta mémoire food privée, organisée pour toujours.",
    es: "Busca un sitio, o compártelo directamente desde Instagram o Google Maps. Márcalo como visitado o wishlist. Añade tu valoración honesta y una nota personal. Tu memoria gastronómica privada, organizada para siempre.",
  },
  step1Pill: {
    en: "Private by default",
    fr: "Privé par défaut",
    es: "Privado por defecto",
  },
  step2Title: {
    en: "Share with your circle",
    fr: "Partage avec ton cercle",
    es: "Comparte con tu círculo",
  },
  step2Body: {
    en: "Not the world. The people whose taste you trust. Share a place or a full list — your friends see a map with your picks, no app install needed.",
    fr: "Pas le monde entier. Les gens dont tu fais confiance au goût. Partage une adresse ou une liste complète — tes amis voient une carte avec tes choix, sans installer l'appli.",
    es: "No al mundo entero. A las personas cuyo gusto te importa. Comparte un sitio o una lista entera — tus amigos ven un mapa con tus elecciones, sin instalar la app.",
  },
  step2Pill: {
    en: "WhatsApp · No install required",
    fr: "WhatsApp · Sans installation",
    es: "WhatsApp · Sin instalación",
  },
  step3Title: {
    en: "Discover & explore",
    fr: "Découvre & explore",
    es: "Descubre & explora",
  },
  step3Body: {
    en: "See what your friends love on every place page. Explore profiles of people with similar taste. The more your circle saves, the more valuable Barhio becomes for everyone.",
    fr: "Vois ce que tes amis aiment sur chaque adresse. Explore les profils de personnes au goût similaire. Plus ton cercle sauvegarde, plus Barhio devient précieux pour tout le monde.",
    es: "Ve qué les encanta a tus amigos en cada sitio. Explora perfiles de gente con gusto parecido. Cuanto más guarda tu círculo, más valioso se vuelve Barhio para todos.",
  },
  step3Pill: {
    en: "Friend ratings only",
    fr: "Notes d'amis uniquement",
    es: "Solo valoraciones de amigos",
  },
  promiseLabel: {
    en: "Our promise",
    fr: "Notre promesse",
    es: "Nuestra promesa",
  },
  finalSub: {
    en: "Launching in Barcelona. Be among the first foodies on Barhio.",
    fr: "Lancement à Barcelone. Sois parmi les premiers foodies sur Barhio.",
    es: "Lanzamos en Barcelona. Sé de los primeros foodies en Barhio.",
  },
  finalCta: {
    en: "Join waitlist",
    fr: "Rejoindre la liste",
    es: "Unirse a la lista",
  },
  finalNote: {
    en: "No spam. No ads. Just Barhio when it's ready.",
    fr: "Pas de spam. Pas de pub. Juste Barhio quand c'est prêt.",
    es: "Sin spam. Sin anuncios. Solo Barhio cuando esté listo.",
  },
} satisfies Record<string, Dict>;

export type T = typeof t;
