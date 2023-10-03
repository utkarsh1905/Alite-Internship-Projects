import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./reducers/store.js";
import { Provider } from "react-redux";
// import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
  // <GoogleOAuthProvider clientId="705353962169-ps6s6fjjae3a6kta372e4229nunldgq2.apps.googleusercontent.com">
  // </GoogleOAuthProvider>
);
