import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/BrowserRouter";

import "../src/Styles/_vars.scss";
import "../src/Styles/normalize.scss";
import "../src/Styles/reset.scss";
import "../src/Styles/global.scss";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
