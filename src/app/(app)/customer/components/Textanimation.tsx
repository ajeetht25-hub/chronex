import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

interface Item {
  content: string | React.ReactNode;
}

interface InfiniteScrollProps {
  width?: string;
  items: Item[];
  itemSpacing?: number;
  isTilted?: boolean;
  initialIndex?: number; 
}

export default function InfiniteScroll({
  width = "30rem",
  items = [],
  itemSpacing = 80,
  isTilted = false,
  initialIndex = 1, 
}: InfiniteScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || items.length === 0) return;

    const textElements = gsap.utils.toArray<HTMLElement>(container.children);

    gsap.set(textElements, {
      y: (i) => i * itemSpacing,
      opacity: (i) => (i === selectedIndex ? 1 : 0.3),
      scale: (i) => (i === selectedIndex ? 1.2 : 1),
    });

    const observer = Observer.create({
      target: container,
      type: "wheel,touch,pointer",
      preventDefault: true,
      onChange: ({ deltaY }) => {
        const direction = deltaY > 0 ? 1 : -1;
        const newIndex = (selectedIndex + direction + items.length) % items.length;
        setSelectedIndex(newIndex);

        textElements.forEach((el, i) => {
          gsap.to(el, {
            y: ((i - newIndex) * itemSpacing) + (window.innerHeight / 2 - itemSpacing),
            opacity: i === newIndex ? 1 : 0.3,
            scale: i === newIndex ? 1.2 : 1,
            duration: 0.5,
            ease: "power2.out",
          });
        });
      },
    });

    textElements.forEach((el, i) => {
      gsap.set(el, {
        y: ((i - selectedIndex) * itemSpacing) + (window.innerHeight / 2 - itemSpacing),
      });
    });

    return () => observer.kill();
  }, [items, selectedIndex, itemSpacing]);

  return (
    <div
      ref={scrollRef}
      className="h-10"
      style={{
        width,
        transformStyle: "preserve-3d",
      }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          className="left-0 w-96 cursor-pointer"
          onClick={() => setSelectedIndex(i)}
        >
          <div
            className={`text-4xl font-bold transition-all duration-300 ${
              selectedIndex === i ? "text-white" : "text-transparent"
            }`}
            style={{
              WebkitTextStroke: selectedIndex === i ? "0px" : "1px white",
            }}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
