import {create} from 'zustand';

interface StoreProps{
    isMobile: boolean;
    color: string;
    material: string;
    dial: string;
    setIsMobile: (isMobile: boolean) => void;
    setColor: (color: string) => void;
    setMaterial: (material: string) => void;
    setDial: (dial: string) => void;
}

export const useStore = create<StoreProps>((set) => ({
    isMobile: false,
    color: "",
    material: "",
    dial: "",
    setIsMobile: (isMobile) => set({isMobile}),
    setColor: (color) => set({color}),
    setMaterial: (material) => set({material}),
    setDial: (dial) => set({dial}),
}))