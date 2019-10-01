import React, { Suspense, lazy } from "react";
import { injectIntl } from "gatsby-plugin-intl";
const ReactFlagsSelect = lazy(() => import("react-flags-select"));

interface IProps {
  intl: any;
}

const LanguageSelectorComponent = ({ intl }: IProps) => {
  const setLanguage = (language: string) => {
    intl.changeLocale(language);
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
  console.log(intl);
  return (
    <Suspense fallback={<div />}>
      <ReactFlagsSelect
        countries={["GB", "FR"]}
        customLabels={{
          GB: intl.formatMessage({ id: "languages.english" }),
          FR: intl.formatMessage({ id: "languages.french" }),
        }}
        selectedSize={20}
        defaultCountry={intl.language === "fr" ? "FR" : "GB"}
        placeholder={intl.formatMessage({ id: "languages.selectLanguage" })}
        onSelect={onChange}
      />
    </Suspense>
  );
};

export const LanguageSelector = injectIntl(LanguageSelectorComponent);
