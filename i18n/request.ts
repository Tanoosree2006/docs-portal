import { getRequestConfig } from "next-intl/server";
import { defaultLocale, locales } from "../i18n";

export default getRequestConfig(async ({ locale }) => {
  const safeLocale =
    typeof locale === "string" && locales.includes(locale as any)
      ? locale
      : defaultLocale;

  return {
    locale: safeLocale,
    messages: (await import(`../messages/${safeLocale}.json`)).default
  };
});
