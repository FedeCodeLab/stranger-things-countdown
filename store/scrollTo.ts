import { create } from "zustand";
import { RefObject } from "react";

export interface ScrollStore {
  topRef: RefObject<HTMLElement | null> | null;
  avancesRef: RefObject<HTMLElement | null> | null;
  triviaRef: RefObject<HTMLElement | null> | null;
  setTopRef: (ref: RefObject<HTMLElement | null>) => void;
  setAvancesRef: (ref: RefObject<HTMLElement | null>) => void;
  setTriviaRef: (ref: RefObject<HTMLElement | null>) => void;
  scrollToTop: () => void;
  scrollToAvances: () => void;
  scrollToTrivia: () => void;
}

export const useScrollStore = create<ScrollStore>((set, get) => ({
  topRef: null,
  avancesRef: null,
  triviaRef: null,

  setTopRef: (ref) => set({ topRef: ref }),
  setAvancesRef: (ref) => set({ avancesRef: ref }),
  setTriviaRef: (ref) => set({ triviaRef: ref }),

  scrollToTop: () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  scrollToAvances: () => {
    const ref = get().avancesRef;
    if (ref?.current) ref.current.scrollIntoView({ behavior: "smooth" });
  },

  scrollToTrivia: () => {
    const ref = get().triviaRef;
    if (ref?.current) ref.current.scrollIntoView({ behavior: "smooth" });
  },
}));
