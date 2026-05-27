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
    en: "Coming to France & Spain",
    fr: "Bientôt en France & Espagne",
    es: "Próximamente en Francia & España",
  },
  heroSub: {
    en: "The social map for foodies. Capture spots from Instagram or Google Maps, build lists, and see what the people you trust actually recommend.",
    fr: "La carte sociale pour foodies. Capture des adresses depuis Instagram ou Google Maps, crée des listes, et vois ce que tes amis recommandent vraiment.",
    es: "El mapa social para foodies. Captura sitios desde Instagram o Google Maps, crea listas y descubre lo que tus amigos recomiendan de verdad.",
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
    en: "Capture from anywhere",
    fr: "Capture depuis partout",
    es: "Captura desde cualquier sitio",
  },
  feature1Body: {
    en: "Share an Instagram reel or Google Maps link to Barhio. AI extracts the place in under 5 seconds. No typing, no friction.",
    fr: "Partage un reel Instagram ou un lien Google Maps vers Barhio. L'IA extrait l'adresse en moins de 5 secondes. Sans effort.",
    es: "Comparte un reel de Instagram o un enlace de Google Maps a Barhio. La IA extrae el lugar en menos de 5 segundos.",
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
    en: "Trust your people",
    fr: "Fais confiance à tes amis",
    es: "Confía en tu gente",
  },
  feature3Body: {
    en: "See the aggregated rating of your friends on every place. Not 10,000 strangers — the three people whose taste you actually trust.",
    fr: "Vois la note agrégée de tes amis sur chaque adresse. Pas 10 000 inconnus — les trois personnes dont tu fais vraiment confiance.",
    es: "Ve la nota media de tus amigos en cada sitio. No 10.000 desconocidos — las tres personas en quienes realmente confías.",
  },
  feature4Title: {
    en: "Share lists in one tap",
    fr: "Partage des listes en un tap",
    es: "Comparte listas en un tap",
  },
  feature4Body: {
    en: 'Build themed lists like "Date Night" or "Best Brunch". Share to WhatsApp in one tap — your friends see a map, no app install needed.',
    fr: 'Crée des listes comme "Dîner en amoureux" ou "Meilleurs brunchs". Partage sur WhatsApp en un tap — avec carte, sans install.',
    es: 'Crea listas como "Cena romántica" o "Mejores brunchs". Comparte por WhatsApp en un tap — con mapa, sin instalar la app.',
  },
  howEyebrow: {
    en: "How it works",
    fr: "Comment ça marche",
    es: "Cómo funciona",
  },
  step1Title: { en: "Capture", fr: "Capture", es: "Captura" },
  step1Body: {
    en: "See a restaurant on Instagram? Share it to Barhio. AI extracts name, address, and type instantly. Or search directly, or import from Google Maps.",
    fr: "Tu vois un restaurant sur Instagram ? Partage-le vers Barhio. L'IA extrait le nom, l'adresse et le type instantanément.",
    es: "¿Ves un restaurante en Instagram? Compártelo a Barhio. La IA extrae el nombre, dirección y tipo al instante.",
  },
  step2Title: {
    en: "Save & rate",
    fr: "Sauvegarde & note",
    es: "Guarda & valora",
  },
  step2Body: {
    en: "Mark it visited or wishlist. Add your rating and a personal note. Build your map of places that matter.",
    fr: "Marque-le visité ou wishlist. Ajoute ta note et un commentaire perso. Construis ta carte des adresses qui comptent.",
    es: "Márcalo como visitado o wishlist. Añade tu valoración y una nota personal. Construye tu mapa de sitios favoritos.",
  },
  step2Pill: {
    en: "Private by default",
    fr: "Privé par défaut",
    es: "Privado por defecto",
  },
  step3Title: { en: "Share", fr: "Partage", es: "Comparte" },
  step3Body: {
    en: "Create themed lists. One tap sends them to WhatsApp with a map. Friends can view without installing the app.",
    fr: "Crée des listes thématiques. Un tap les envoie sur WhatsApp avec une carte. Les amis voient sans installer l'appli.",
    es: "Crea listas temáticas. Un tap las envía por WhatsApp con un mapa. Los amigos las ven sin instalar la app.",
  },
  promiseLabel: {
    en: "Our promise",
    fr: "Notre promesse",
    es: "Nuestra promesa",
  },
  finalSub: {
    en: "Launching in France and Spain. Be among the first foodies on Barhio.",
    fr: "Lancement en France et en Espagne. Sois parmi les premiers foodies sur Barhio.",
    es: "Lanzamiento en Francia y España. Sé de los primeros foodies en Barhio.",
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
