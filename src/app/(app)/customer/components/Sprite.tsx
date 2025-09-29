// --- Fixed Sprite.tsx ---
import React, { useEffect, useRef, useState } from "react";

interface SpriteProps {
  images: string[];
  fps?: number;
  width?: number;
  height?: number;
  loop?: boolean;
  autoplay?: boolean;
  animationType?: 'default' | 'bezel' | 'toggle' | 'backStrap';
  onComplete?: () => void;
}

const Sprite: React.FC<SpriteProps> = ({
  images,
  fps = 24,
  width = 500,
  height = 500,
  loop = false,
  autoplay = true,
  animationType = 'default',
  onComplete,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameIndex = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef<number | null>(null);
  const completedRef = useRef(false);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [currentImage, setCurrentImage] = useState(images[0] || '');

  // Preload all images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  useEffect(() => {
    const isSmallScreen = window.innerWidth <= 768;

    switch (animationType) {
      case 'toggle':
      setPosition(isSmallScreen ? { x: -width * 0.4, y: -height * 0.2 } : { x: -width * 0.8, y: -height * 0.4 });
      setScale(1);
      break;
      case 'backStrap':
      setPosition(isSmallScreen ? { x: width * 0.4, y: height * 0.07 } : { x: width * 0.8, y: height * 0.13 });
      setScale(1);
      break;
      case 'bezel':
      setPosition(isSmallScreen ? { x: 0, y: 0 } : { x: 0, y: 0 });
      setScale(isSmallScreen ? 1.2 : 1.3);
      break;
      default:
      setPosition({ x: 0, y: 0 });
      setScale(1);
    }
  }, [animationType, width, height]);

  useEffect(() => {
    if (!autoplay || images.length === 0) return;

    frameIndex.current = 0;
    lastFrameTimeRef.current = null;
    completedRef.current = false;

    const animate = (timestamp: number) => {
      if (!lastFrameTimeRef.current) {
        lastFrameTimeRef.current = timestamp;
      }

      const elapsed = timestamp - lastFrameTimeRef.current;
      const frameTime = 1000 / fps;

      if (elapsed >= frameTime) {
          if (animationType === 'default') {
          // For default view, immediately show first frame and complete
          frameIndex.current = 0;
          setCurrentImage(images[0]);
          if (!completedRef.current && onComplete) {
            completedRef.current = true;
            onComplete();
          }
          return; // Stop animation for default view
        }

        frameIndex.current++;
        if (frameIndex.current >= images.length) {
          if (!completedRef.current && onComplete) {
            completedRef.current = true;
            onComplete();
          }
          if (loop) {
            frameIndex.current = 0;
          } else {
            return; // Stop animation
          }
        }
        setCurrentImage(images[frameIndex.current]);
        lastFrameTimeRef.current = timestamp;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [autoplay, images, fps, loop, onComplete, animationType]);

  return (
    <div
      ref={containerRef}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: `url(${currentImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${scale})`,
        transition: "transform 0.5s ease-out",
      }}
    />
  );
};

export default Sprite;
