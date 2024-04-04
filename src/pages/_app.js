import { Header } from "@/components/Header";
import { Transition } from "@/components/Transition";
import { TransitionProvider } from "@/contexts/TransitionContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps, router }) {
  return (
    <TransitionProvider>
      <Header />
      <Transition>
        <Component key={router.route} {...pageProps} />
      </Transition>
    </TransitionProvider>
  );
}
