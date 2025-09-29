import { create } from "zustand";

interface State {
name: string;
email: string;
phone: string;
}

interface Actions {
    setName: (name: string) => void;
    setEmail: (email: string) => void;
    setPhone: (phone: string) => void;
}

export const useCustomerStore = create<State & Actions>((set) => ({
    name: "",
    email: "",
    phone: "",
    setName: (name: string) => set({ name }),
    setEmail: (email: string) => set({ email }),
    setPhone: (phone: string) => set({ phone }),
}));