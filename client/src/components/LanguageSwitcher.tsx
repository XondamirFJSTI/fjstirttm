import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const languages = [
  { code: 'uz', name: 'O\'zbekcha' },
  { code: 'ru', name: 'Русский' },
  { code: 'en', name: 'English' }
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={i18n.language === lang.code ? "default" : "outline"}
          size="sm"
          onClick={() => i18n.changeLanguage(lang.code)}
        >
          {lang.name}
        </Button>
      ))}
    </div>
  );
}
