import React from "react";
import { Helmet } from "react-helmet";
import { injectIntl } from "gatsby-plugin-intl";
import "../style/style.scss";

interface IProps {
  children: JSX.Element | JSX.Element[];
  intl: any;
}
const Layout = ({ children, intl }: IProps) => (
  <>
    <Helmet
      htmlAttributes={{
        lang: intl.locale,
      }}
    >
      <title>Bastien Chevallier</title>
      <link
        rel="preload"
        href="/icomoon.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Bastien Chevallier - Full Stack Developer - Portfolio"
      />
      <meta
        name="keywords"
        content="bastien, chevallier, developer, fullstack, javascript, portfolio"
      />
      <meta name="author" content="Bastien Chevallier" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:locale:alternate" content="fr_FR" />
      <meta property="og:title" content="Bastien Chevallier" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="" />
      <meta property="og:url" content="https://www.bastienchevallier.com" />
      <meta property="og:site_name" content="Bastien Chevallier" />
      <meta
        property="og:description"
        content="Bastien Chevallier - Full Stack Developer - Portfolio"
      />
      <meta name="twitter:title" content="Bastien Chevallier" />
      <meta name="twitter:image" content="" />
      <meta name="twitter:url" content="https://www.bastienchevallier.com" />
      <meta
        name="twitter:card"
        content="Bastien Chevallier - Full Stack Developer - Portfolio"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Space+Mono"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Kaushan+Script"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
        rel="stylesheet"
      />
      <link
        rel="alternate"
        href="https://www.bastienchevallier.com"
        hrefLang="x-default"
      />
      <link
        rel="alternate"
        href="https://www.bastienchevallier.com/en"
        hrefLang="en"
      />
      <link
        rel="alternate"
        href="https://www.bastienchevallier.com/en"
        hrefLang="en-us"
      />
      <link
        rel="alternate"
        href="https://www.bastienchevallier.com/en"
        hrefLang="en-gb"
      />
      <link
        rel="alternate"
        href="https://www.bastienchevallier.com/en"
        hrefLang="en-ca"
      />
      <link
        rel="alternate"
        href="https://www.bastienchevallier.com/en"
        hrefLang="en-au"
      />
      <link
        rel="alternate"
        href="https://www.bastienchevallier.com/en"
        hrefLang="en-nz"
      />
      <link
        rel="alternate"
        href="https://www.bastienchevallier.com/fr"
        hrefLang="fr"
      />
      <link
        rel="alternate"
        href="https://www.bastienchevallier.com/fr"
        hrefLang="fr-fr"
      />
      <link
        rel="alternate"
        href="https://www.bastienchevallier.com/fr"
        hrefLang="fr-ca"
      />
      <link
        rel="alternate"
        href="https://www.bastienchevallier.com/fr"
        hrefLang="fr-ch"
      />
      <link
        rel="alternate"
        href="https://www.bastienchevallier.com/fr"
        hrefLang="fr-be"
      />
      <link
        rel="alternate"
        href="https://www.bastienchevallier.com/fr"
        hrefLang="fr-gf"
      />
      <link
        rel="alternate"
        href="https://www.bastienchevallier.com/fr"
        hrefLang="fr-pf"
      />
      <link
        rel="alternate"
        href="https://www.bastienchevallier.com/fr"
        hrefLang="fr-tf"
      />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
    {children}
  </>
);

export default injectIntl(Layout);
