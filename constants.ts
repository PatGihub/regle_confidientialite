// Récupération des paramètres d'URL pour la configuration dynamique
const params = new URLSearchParams(window.location.search);

// Valeurs par défaut génériques ("L'Application") pour une page unique sans paramètre
export const APP_NAME = params.get('app') || "L'Application";
export const DEVELOPER_NAME = params.get('dev') || "L'Éditeur";
export const CONTACT_EMAIL = params.get('email') || "contact@inn-consulting.com";
export const EFFECTIVE_DATE = params.get('date') || "25 Octobre 2023";
export const WEBSITE_URL = params.get('web') || "#";