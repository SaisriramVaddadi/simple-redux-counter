import { StrictMode } from "react";
import ReactDOM from "react-dom";
import reducers from "./redux/reducers/index";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";

const store = createStore(reducers);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
