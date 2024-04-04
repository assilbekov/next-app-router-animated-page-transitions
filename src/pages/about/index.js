import { TransitionContext } from "@/contexts/TransitionContext";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useContext, useRef } from "react";
import Picture from '../../../public/images/3.jpg'
import gsap from "gsap";

export default function About() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const { timeline } = useContext(TransitionContext)

  useGSAP(() => {
    const targets = gsap.utils.toArray(["p", imageRef.current])
    gsap.fromTo(targets, { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.25 })
    timeline.add(gsap.to(containerRef.current, { opacity: 0 }))
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className='h-[200vh] flex'>
      <div className="h-[100vh] w-full flex flex-col justify-center items-center gap-5">
        <p className="text-[5vw]">About</p>
        <p className="max-w-[50%] text-center">Sed ut rhoncus nibh. Cras eleifend tellus a enim sodales, a efficitur odio euismod. Aenean non consequat lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce quis eleifend ipsum, sit amet posuere ligula.</p>
        <div ref={imageRef} className='relative w-[50%] h-[40vh]'>
          <Image
            src={Picture}
            placeholder='blur'
            fill
            style={{ objectFit: "cover" }}
            alt="Picture of a mountain"
          />
        </div>
      </div>
    </div>
  );
}