import "flowbite";
import Router from "./router";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { store } from "./store/store";

import "./App.css";
import "tippy.js/dist/tippy.css";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <div className="App">
            <Router></Router>
          </div>
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
