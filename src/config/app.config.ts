export const appConfig = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_URL || "https://api.jivora.com/v1",
  sessionTimeoutMinutes: 60,
  maxFileUploadSizeMb: 25,
  defaultCurrency: "USD",
  supportedCurrencies: ["USD", "EUR", "GBP", "INR", "AED", "SGD"],
  supportedLanguages: [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "fr", name: "Français" },
    { code: "de", name: "Deutsch" },
    { code: "ar", name: "العربية" },
  ],
};
