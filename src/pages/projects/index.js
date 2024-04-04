import gsap from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { useContext, useRef } from "react";
import Picture from '../../../public/images/2.jpg'
import { TransitionContext } from "@/contexts/TransitionContext";


export default function Projects() {
  const {timeline} = useContext(TransitionContext);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const targets = gsap.utils.toArray(["p", imageRef.current])
    gsap.fromTo(targets, {x: -30, opacity: 0}, {x: 0, opacity: 1, stagger: 0.25})
    timeline.add(gsap.to(containerRef.current, {opacity: 0}))
  }, {scope: containerRef})

  return (
    <div ref={containerRef} className='h-[200vh] flex'>
      <div className="h-[100vh] w-full flex flex-col justify-center items-center gap-5">
        <p className="text-[5vw]">Projects</p>
        <p className="max-w-[50%] text-center">Sed ut rhoncus nibh. Cras eleifend tellus a enim sodales, a efficitur odio euismod. Aenean non consequat lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce quis eleifend ipsum, sit amet posuere ligula.</p>
        <p className="max-w-[50%] text-center">Fusce quis eleifend ipsum, sit amet posuere ligula.</p>
        <div ref={imageRef} className='relative w-[50%] h-[40vh]'>
          <Image
            src={Picture}
            placeholder='blur'
            fill
            style={{objectFit: "cover"}}
          />
        </div>
      </div>
    </div>
  )
}