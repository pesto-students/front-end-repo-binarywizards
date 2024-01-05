import { createContext, useState } from "react";
import { propTypes } from "src/utils/props";

export const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [showLoader, setShowLoader] = useState(false);
  const [loaderContext, setLoaderContext] = useState("Loading...");

  const toggleLoader = (flag = false, context = "Loading...") => {
    setShowLoader(flag);
    setLoaderContext(context);
  };

  const loaderValue = {
    showLoader,
    loaderContext,
    toggleLoader,
  };

  return (
    <LoaderContext.Provider value={loaderValue}>
      {children}
    </LoaderContext.Provider>
  );
};

LoaderProvider.propTypes = {
  children: propTypes.children,
};
