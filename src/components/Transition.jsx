import { useState } from "react"


export const Transition = ({ children }) => {
  const [selectedChildren, setSelectedChildren] = useState(children);
  return (
    <div>
      sdf
      {children}
    </div>
  )
}