import ReactDOM from "react-dom/client";
import { App } from "./app/App";
import { StrictMode } from "react";
import { MainWrapper } from "app/wrappers/MainWrapper";
import { StoreProvider } from "app/providers/StoreProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <StoreProvider>
      <MainWrapper>
        <App />
      </MainWrapper>
    </StoreProvider>
  </StrictMode>
);
