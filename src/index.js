import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./component/GlobalStyles";
import { Contexts } from "./context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Contexts>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </Contexts>
);

reportWebVitals();
