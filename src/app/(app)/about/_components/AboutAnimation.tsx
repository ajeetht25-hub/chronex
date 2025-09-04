import React, { useRef } from "react";
import { Environment } from "@react-three/drei";
import { Group } from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Watch from "../../_components/Canvas/Watch";
import { useStore } from "../../_store/store";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AlternativeWatch = () => {
  const watchRef = useRef<Group>(null);

  const isMobile = useStore((state) => state.isMobile);

  useGSAP(() => {
    if (!watchRef.current) return;

    gsap.set(watchRef.current.position, { x: isMobile ? 0: 1, y: isMobile ? -0.4: -0.8 });
    gsap.set(watchRef.current.rotation, { x: isMobile ? 0: 0.2, y: isMobile ? 0: -1, z: 0 });
    gsap.set(watchRef.current.scale, { x: isMobile ? 0.8: 1,y: isMobile ? 0.8: 1,z: isMobile ? 0.8: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-sections-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
        pin: ".about-watch",
        pinSpacing: true,
        anticipatePin: 1,
        markers: false,
      },
    });

    let states;

    if(isMobile){
      states = {
        section1: {
          position: { x: -0.2, y: -0.6, z: 0 },
          rotation: { x: 0.2, y: -1, z: 0 },
          scale: { x: 0.8, y: 0.8, z: 0.8 },
        },
        section2: {
          position: { x: -1, y: -0.7, z: 0 },
          rotation: { x: -1.5, y: 0, z: -1.5 },
          scale: { x: 1.2, y: 1.2, z: 1.2 },
        },
        section3: {
          position: { x: -1, y: 0, z: 0 },
          rotation: { x: 0, y: 0, z: -1.6 },
          scale: { x: 1.2, y: 1.2, z: 1.2 },
        },
        section4: {
          position: { x: -1, y: -0.5, z: 0 },
          rotation: { x: 3.4, y: 0, z: -1.6 },
          scale: { x: 1.2, y: 1.2, z: 1.2 },
        },
        section5: {
          position: { x: 0, y: -1.2, z: 0 },
          rotation: { x: 0, y: 0, z: 0 },
          scale: { x: 0.8, y: 0.8, z: 0.8 },
        },
      };
    }else{
      states = {
        section1: {
          position: { x: 1, y: -0.8, z: 0 },
          rotation: { x: 0.2, y: -1, z: 0 },
          scale: { x: 1, y: 1, z: 1 },
        },
        section2: {
          position: { x: -2.1, y: -1.8, z: 0 },
          rotation: { x: -1.5, y: 0, z: -1.5 },
          scale: { x: 2.5, y: 2.5, z: 2.5 },
        },
        section3: {
          position: { x: -1.45, y: 0, z: 0 },
          rotation: { x: 0, y: 0, z: -1.6 },
          scale: { x: 1.8, y: 1.8, z: 1.8 },
        },
        section4: {
          position: { x: -1.7, y: -1.1, z: 0 },
          rotation: { x: 3.4, y: 0, z: -1.6 },
          scale: { x: 2.1, y: 2.1, z: 2.1 },
        },
        section5: {
          position: { x: 0, y: -1.2, z: 0 },
          rotation: { x: 0, y: 0, z: 0 },
          scale: { x: 1.1, y: 1.1, z: 1.1 },
        },
      };
    }

    tl.to(watchRef.current.position, {
      ...states.section2.position,
      duration: 1,
      ease: "power1.inOut",
    })
      .to(
        watchRef.current.rotation,
        {
          ...states.section2.rotation,
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        watchRef.current.scale,
        {
          ...states.section2.scale,
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      )

      .to(watchRef.current.position, {
        ...states.section3.position,
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        watchRef.current.rotation,
        {
          ...states.section3.rotation,
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        watchRef.current.scale,
        {
          ...states.section3.scale,
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      )

      .to(watchRef.current.position, {
        ...states.section4.position,
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        watchRef.current.rotation,
        {
          ...states.section4.rotation,
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        watchRef.current.scale,
        {
          ...states.section4.scale,
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      )

      .to(watchRef.current.position, {
        ...states.section5.position,
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        watchRef.current.rotation,
        {
          ...states.section5.rotation,
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        watchRef.current.scale,
        {
          ...states.section5.scale,
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      );
  });

  return (
    <group ref={watchRef}>
      <Watch />
      <Environment files={"/hdr/photo_studio.hdr"} environmentIntensity={3} />
    </group>
  );
};

export default AlternativeWatch;
