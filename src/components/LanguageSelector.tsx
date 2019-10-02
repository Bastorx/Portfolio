import React from "react";
import { injectIntl, changeLocale } from "gatsby-plugin-intl";
import ReactFlagsSelect from "react-flags-select";

interface IProps {
  intl: any;
}

const LanguageSelectorComponent = ({ intl }: IProps) => {
  const setLanguage = (language: string) => {
    changeLocale(language);
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
        GB: intl.formatMessage({ id: "languages.english" }),
        FR: intl.formatMessage({ id: "languages.french" }),
      }}
      selectedSize={20}
      defaultCountry={intl.locale === "fr" ? "FR" : "GB"}
      placeholder={intl.formatMessage({ id: "languages.selectLanguage" })}
      onSelect={onChange}
    />
  );
};

export const LanguageSelector = injectIntl(LanguageSelectorComponent);
