import { Provider } from "react-redux";
import "../app/globals.css";
import store from "@/redux/store";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Toaster />
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
