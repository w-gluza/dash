import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";


import MessageList from "./assets/json/status.json";

import common_en from "./translations/en/common.json";
import common_pt from "./translations/pt/common.json";
import common_es from "./translations/es/common.json";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en", // default language
  resources: {
    en: {
      common: common_en // 'common' is our custom namespace
    },
    pt: {
      common: common_pt
    },
    es: {
      common: common_es
    }
  }
});


ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <App MessageList={MessageList} />
  </I18nextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
