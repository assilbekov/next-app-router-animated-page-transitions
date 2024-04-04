import { Header } from "@/components/Header";
import { Transition } from "@/components/Transition";
import { TransitionContext } from "@/contexts/TransitionContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <TransitionContext>
      <Header />
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </TransitionContext>
  );
}
