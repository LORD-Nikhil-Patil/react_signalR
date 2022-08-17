/* eslint-disable prettier/prettier */
import * as React from "react";
import App from "../src/containers/App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import {configureAppStore} from "./store/configureStore";
require("../src/css/app.css");

const store = configureAppStore();

const container = document.getElementById("root")!;
const root = createRoot(container);

if (root !== null) {

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

}
