import React from "react";
import "./App.scss";

import { Provider } from "react-redux";
import { store } from "./store/configStore";
// core components
import Customer from "./scenes/Customer/index";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Customer />
      </Provider>
    </div>
  );
}

export default App;
