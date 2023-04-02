import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Navbar from "./Header";
import Footer from "./footer";
import store from "../redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

let persistor = persistStore(store);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </PersistGate>
    </Provider>
  );
}
