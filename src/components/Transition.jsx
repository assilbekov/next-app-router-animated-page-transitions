import { TransitionContext } from "@/contexts/TransitionContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext, useRef, useState } from "react"

export const Transition = ({ children }) => {
  const [selectedChildren, setSelectedChildren] = useState(children);
  const { timeline } = useContext(TransitionContext);
  const { contextSafe } = useGSAP();

  const exit = contextSafe(() => {
    timeline.play().then(() => {
      window.scrollTo(0, 0)
      setSelectedChildren(children);
      timeline.pause().clear();
    })
  })

  useGSAP(() => {
    if (children.key !== selectedChildren.key) {
      exit();
    }
  }, [children])

  return (
    <div>
      {selectedChildren}
    </div>
  )
}