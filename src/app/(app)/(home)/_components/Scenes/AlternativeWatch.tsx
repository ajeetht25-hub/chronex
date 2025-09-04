"use client";
import React, { useRef } from "react";

import { Environment } from "@react-three/drei";
import { Group } from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Watch from "../../../_components/Canvas/Watch";
import { useStore } from "../../../_store/store";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AlternativeWatch = () => {
  const watchRef = useRef<Group>(null);
  const isMobile = useStore((state) => state.isMobile);

  useGSAP(() => {
    if (!watchRef.current) return;
    const x = isMobile ? -0.2 : -1.5;
    const y = isMobile ? -0.6 : -1;

    gsap.set(watchRef.current.position, { x: x, y: y });
    gsap.set(watchRef.current.rotation, { x: isMobile ? 0 : -0.2, y: isMobile ? 0.5 : 0.9, z: isMobile ? 0 : 0.3 });
    gsap.set(watchRef.current.scale, {x: isMobile ? 0.8 : 1,y: isMobile ? 0.8 : 1,z: isMobile ? 0.8 : 1})

    const sections = gsap.utils.toArray(".knowmore-section");

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".knowmore-watch",
        endTrigger: ".knowmore-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: true,
      } as gsap.plugins.ScrollTriggerInstanceVars,
    });


    if (!isMobile){
      sections.forEach((_section, i) => {
        if (i < 2) {
          const isEven = i % 2 === 0;
          const xPos = isEven ? "-1.5" : "1.2";
          const yPos = isEven ? "-1" : "-1";
          const xRot = isEven ? "-0.2" : "0.1";
          const yRot = isEven ? "0.9" : "-1.01";
          const zRot = isEven ? "0.3" : "0";
  
          scrollTl
            .to(watchRef.current!.position, {
              x: xPos,
              y: yPos,
              duration: 3,
              ease: "sine.inout",
            })
            .to(
              watchRef.current!.rotation,
              {
                y: yRot,
                x: xRot,
                z: zRot,
                duration: 3,
                ease: "sine.inOut",
              },
              "<"
            );
        }
      });
    }else{
      sections.forEach((_section, i) => {
        if (i < 2) {
          const isEven = i % 2 === 0;
          const xPos = isEven ? "0.2" : "-0.2";
          const yPos = isEven ? "-0.6" : "-0.6";
          const xRot = isEven ? "0" : "0";
          const yRot = isEven ? "-0.5" : "0.5";
          const zRot = isEven ? "0" : "0";
  
          scrollTl
            .to(watchRef.current!.position, {
              x: xPos,
              y: yPos,
              duration: 3,
              ease: "sine.inout",
            })
            .to(
              watchRef.current!.rotation,
              {
                y: yRot,
                x: xRot,
                z: zRot,
                duration: 3,
                ease: "sine.inOut",
              },
              "<"
            );
        }
      });
    }

    scrollTl
      .to(watchRef.current!.position, {
        x: 0,
        y: isMobile ? -0.7 : -0.6,
        z: 0,
        duration: 3,
        ease: "power2.inOut",
      })
      .to(
        watchRef.current!.rotation,
        {
          x: 0,
          y: 0,
          z: 0,
          duration: 3,
          ease: "power2.inOut",
        },
        "<"
      );

    const scaleSteps = isMobile ? [0.8, 0.85, 0.9, 1] : [1, 1.05, 1.1, 1.15];
    const features = gsap.utils.toArray(".feature-box");

    features.forEach((feature, index) => {
      const isLeftSide = index < 2;

      scrollTl
        .to(watchRef.current!.scale, {
          x: scaleSteps[index],
          y: scaleSteps[index],
          z: scaleSteps[index],
          duration: 1,
          ease: "power2.inOut",
        })
        .fromTo(
          feature!,
          {
            opacity: 0,
            x: isLeftSide ? -50 : 50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power2.out",
          },
          "<"
        );
    });
  });

  return (
    <group ref={watchRef}>
      <Watch />
      <Environment files={"/hdr/photo_studio.hdr"} environmentIntensity={3} />
    </group>
  );
};

export default AlternativeWatch;