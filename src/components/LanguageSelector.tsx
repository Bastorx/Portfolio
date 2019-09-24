import React from "react";
import ReactFlagsSelect from "react-flags-select";
import { useTranslation } from "react-i18next";

export const LanguageSelector = () => {
  const { t, i18n } = useTranslation("translation");
  const setLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  const onChange = (language: string) => {
    switch (language) {
      case "GB":
        setLanguage("en");
        break;
      case "FR":
        setLanguage("fr");
    }
  };
  return (
    <ReactFlagsSelect
      countries={["GB", "FR"]}
      customLabels={{
        GB: t("languages.english"),
        FR: t("languages.french")
      }}
      selectedSize={20}
      defaultCountry={i18n.language === "fr" ? "FR" : "GB"}
      placeholder={t("languages.selectLanguage")}
      onSelect={onChange}
    />
  );
};
