import { Header } from "@/components/Header";
import { Transition } from "@/components/Transition";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </>
  );
}
