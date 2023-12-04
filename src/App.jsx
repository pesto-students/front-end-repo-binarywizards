import Router from "./router";
import { Provider } from "react-redux";

import { store } from "./store/store";

import "./App.css";
import "tippy.js/dist/tippy.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <Router></Router>
        </div>
      </Provider>
    </>
  );
}

export default App;
