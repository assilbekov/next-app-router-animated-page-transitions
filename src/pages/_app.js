import { Header } from "@/components/Header";
import { Transition } from "@/components/Transition";
import { TransitionProvider } from "@/contexts/TransitionContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <TransitionProvider>
      <Header />
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </TransitionProvider>
  );
}
