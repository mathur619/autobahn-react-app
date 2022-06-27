import React from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";

import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <ToastContainer
        newestOnTop
        position="top-center"
        autoClose={2000}
        transition={Slide}
        toastClassName="App-toast"
      />
    </div>
  );
}

export default App;
