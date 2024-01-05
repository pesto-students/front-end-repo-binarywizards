import "flowbite";
import Router from "./router";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-image-crop/dist/ReactCrop.css";

import { store } from "./store/store";

import "./App.css";
import "tippy.js/dist/tippy.css";
import { LoaderProvider } from "./contexts/loader-context";
import Loader from "./components/loader";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

function App() {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <LoaderProvider>
            <div className="App">
              <div>
                <ToastContainer />
              </div>
              <Router></Router>
            </div>
            <Loader />
          </LoaderProvider>
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
