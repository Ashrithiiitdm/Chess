import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css"; // Or "./App.css" based on where you put Tailwind imports


const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={clerkPubKey} afterSignOutUrl={"/"}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>
);
