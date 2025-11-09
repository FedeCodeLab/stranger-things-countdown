import { RefObject } from "react";

export interface ScrollStore {
  triviaRef: RefObject<HTMLElement> | null;
  setTriviaRef: (ref: RefObject<HTMLElement>) => void;
  scrollToTrivia: () => void;
}
