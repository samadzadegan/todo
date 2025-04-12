import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";

import AppRouter from "./routes";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  // <App />
  <RouterProvider router={AppRouter} />
  // </StrictMode>,
);
