import { Gallery } from "@/_components/gallery";
import { Countdown } from "@/_components/hero";
import { Trivia } from "@/_components/trivia";

export default function Home() {
  return (
    <div className="w-[90%] lg:w-[80%] mx-auto bg-background text-foreground">
      <Countdown />
      <Gallery />
      <Trivia />
    </div>
  );
}
