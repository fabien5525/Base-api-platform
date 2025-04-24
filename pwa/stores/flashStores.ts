import { create } from "zustand";

type FlashMessage = {
    type: "success" | "error" | "info";
    message: string;
};

type FlashStore = {
    flash: FlashMessage | null;
    setFlash: (flash: FlashMessage) => void;
    clearFlash: () => void;
};

export const useFlashStore = create<FlashStore>((set) => ({
    flash: null,
    setFlash: (flash) => set({ flash }),
    clearFlash: () => set({ flash: null }),
}));
