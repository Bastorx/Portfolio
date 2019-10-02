import React, { Suspense, lazy } from "react";
import { useTranslation } from "react-i18next";

const ReactFlagsSelect = lazy(() => import("react-flags-select"));

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
    <Suspense fallback={<div />}>
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
    </Suspense>
  );
};
