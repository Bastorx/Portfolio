import React from "react";
import "../public/style/style.scss";
import "../helpers/i18n";

interface IProps {
  children: JSX.Element | JSX.Element[];
}
export default ({ children }: IProps) => <>{children}</>;
