import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
//TODO ?
//import { PersistGate } from "redux-persist/integration/react";

import store from "./Store/configureStore.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}

    <React.StrictMode>
      <App />
    </React.StrictMode>

    {/* </PersistGate> */}
  </Provider>
);
