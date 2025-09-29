"use client";

import { useState, useEffect } from 'react';
import { useStore } from '../../_store/store';
import { WatchDial, WatchMaterial } from '@/payload-types';

interface Item {
  name: string;
  index: number;
  relativePosition: number;
  id: number;
  colorCode: string;
}

interface ScrollBtnSelectorProps {
  items: WatchDial[] | WatchMaterial[];
  type: 'material' | 'dial';
  initialSelected?: number;
  onSelect?: (index: number) => void;
}

export default function ScrollBtnSelector({ items, type, initialSelected = 0, onSelect }: ScrollBtnSelectorProps) {
  const { setMaterial, setDial, setColor } = useStore();
  const [selectedIndex, setSelectedIndex] = useState<number>(initialSelected);
  const [visibleItems, setVisibleItems] = useState<Item[]>([]);
  const itemHeight = 70;
  const itemWidth = 180; // Width for mobile horizontal scroll
  const visibleCount = 3;
  
  useEffect(() => {
    setSelectedIndex(initialSelected);
  }, [initialSelected]);
  
  useEffect(() => {
    if (items.length === 1) {
      setVisibleItems([{
        name: items[0].name,
        index: 0,
        relativePosition: 0,
        id: items[0].id,
        colorCode: items[0].colorCode
      }]);
      return;
    }
    
    if (items.length === 2) {
      const newVisibleItems: Item[] = [];
      
      newVisibleItems.push({
        name: items[selectedIndex].name,
        index: selectedIndex,
        relativePosition: 0,
        id: items[selectedIndex].id,
        colorCode: items[selectedIndex].colorCode
      });
      
      const otherIndex = selectedIndex === 0 ? 1 : 0;
      newVisibleItems.push({
        name: items[otherIndex].name,
        index: otherIndex,
        relativePosition: selectedIndex === 0 ? 1 : -1,
        id: items[otherIndex].id,
        colorCode: items[otherIndex].colorCode
      });
      
      setVisibleItems(newVisibleItems);
      return;
    }
    
    const half = Math.floor(visibleCount / 2);
    let newVisibleItems: Item[] = [];
    
    for (let i = -half; i <= half; i++) {
      const index = (selectedIndex + i + items.length) % items.length;
      newVisibleItems.push({
        name: items[index].name,
        index: index,
        relativePosition: i,
        id: items[index].id,
        colorCode: items[index].colorCode
      });
    }
    
    setVisibleItems(newVisibleItems);
  }, [selectedIndex, items]);
  
  const handleSelection = (index: number): void => {
    setSelectedIndex(index);
    const selectedItem = items[index];
    
    if (type === 'material') {
      setMaterial(selectedItem.name);
      setColor(selectedItem.colorCode);
    } else if (type === 'dial') {
      setDial(selectedItem.name);
      setColor(selectedItem.colorCode);
    }

    if(onSelect){
      onSelect(index);
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Desktop View - Vertical Scroll (unchanged) */}
      <div className="relative h-48 w-full overflow-hidden hidden lg:block">
        <div className="absolute w-full flex flex-col items-center">
          <div className="relative h-48 w-96 flex flex-col items-center justify-center">
            {visibleItems.map((item, idx) => (
              <div 
                key={`desktop-${idx}`}
                onClick={() => handleSelection(item.index)}
                className={`
                  transition-all duration-300 ease-in-out absolute w-full flex items-center justify-start px-4
                  ${item.relativePosition === 0 ? 'text-4xl font-bold text-white' : 'text-2xl text-stroke text-black leading-snug font-bold select-none opacity-80'}
                  ${item.relativePosition !== 0 ? 'cursor-pointer hover:opacity-100' : ''}
                `}
                style={{
                  transform: `translateY(${item.relativePosition * itemHeight}px)`,
                  opacity: Math.max(0, 1 - Math.abs(item.relativePosition) * 0.2)
                }}
              >
                {item.relativePosition === 0 ? (
                  <div className="flex items-center">
                    <span className="mr-3 text-white">▶</span>
                    <span>{item.name}</span>
                  </div>
                ) : (
                  <span className="ml-8">{item.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View - Horizontal Scroll */}
      <div className="relative h-24 w-full overflow-hidden lg:hidden">
        <div className="absolute w-full flex items-center justify-center">
          <div className="relative h-24 w-full flex items-center justify-center">
            {visibleItems.map((item, idx) => (
              <div 
                key={`mobile-${idx}`}
                onClick={() => handleSelection(item.index)}
                className={`
                  transition-all duration-300 ease-in-out absolute h-full flex flex-col items-center justify-center px-4
                  ${item.relativePosition === 0 ? 'text-2xl font-bold text-white' : 'text-lg text-stroke text-black leading-snug font-bold select-none opacity-80'}
                  ${item.relativePosition !== 0 ? 'cursor-pointer hover:opacity-100' : ''}
                `}
                style={{
                  transform: `translateX(${item.relativePosition * itemWidth}px)`,
                  opacity: Math.max(0, 1 - Math.abs(item.relativePosition) * 0.2)
                }}
              >
                {item.relativePosition === 0 ? (
                  <div className="flex flex-col items-center">
                    <span>{item.name}</span>
                    <span className="text-white text-sm mt-1">▲</span>
                  </div>
                ) : (
                  <span>{item.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}