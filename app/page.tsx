import { Countdown } from "@/_components/Countdown";
import { Gallery } from "@/_components/gallery";

export default function Home() {
  return (
    <div className="min-h- w-[80%] mx-auto bg-background text-foreground">
      <Countdown />
      <Gallery />
    </div>
  );
}
