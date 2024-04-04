import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react"

export const Transition = ({ children }) => {
  const container = useRef(null);
  const [selectedChildren, setSelectedChildren] = useState(children);

  useGSAP(() => {
    gsap.to(container.current, { opacity: 0, duration: 1 }).then(() => {
      setSelectedChildren(children)
      gsap.to(container.current, { opacity: 1, duration: 1 })
    })
  }, [children])

  return (
    <div ref={container}>
      {selectedChildren}
    </div>
  )
}