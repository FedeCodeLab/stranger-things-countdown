"use client";

import { useState, useRef, useEffect } from "react";
import { useScrollStore } from "@/store/scrollTo";
import { videos } from "@/data/videos";
import { Modal } from "../ui/Modal";
import { Card } from "./Card";

export const Gallery = () => {
  const { setAvancesRef } = useScrollStore();
  const avancesSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setAvancesRef(avancesSectionRef);
  }, [setAvancesRef]);

  const [selectedVideo, setSelectedVideo] = useState<{
    title: string;
    src: string;
  } | null>(null);

  const openModal = (video: { title: string; src: string }) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  const first = videos[0];
  const second = videos[1];
  const third = videos[2];

  return (
    <section
      ref={avancesSectionRef}
      className="py-20 bg-black border-t-2 border-[#FF1744]"
      aria-labelledby="videos-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="videos-heading"
          className="text-4xl md:text-5xl font-bold mb-12 text-center uppercase"
          style={{
            color: "#FF1744",
            textShadow: "0 0 10px rgba(255, 23, 68, 0.6)",
          }}
        >
          Desde el Otro Lado: Avances de la Temporada 5
        </h2>

        {/* PRIMER VIDEO */}
        {first && (
          <Card
            key={first.id}
            onClick={() => openModal({ title: first.title, src: first.src })}
            className="mb-12 cursor-pointer group"
          >
            <div
              className="relative overflow-hidden border-2 border-[#FF1744] bg-black group-hover:opacity-90 transition"
              style={{ boxShadow: "0 0 20px rgba(255, 23, 68, 0.5)" }}
            >
              <div className="relative w-full h-[350px] md:h-[400px]">
                <iframe
                  width="100%"
                  height="100%"
                  src={first.src}
                  title={first.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full pointer-events-none"
                />
                <div className="absolute inset-0 cursor-pointer" />
              </div>
            </div>

            <div className="py-4">
              <p className="text-gray-300 font-semibold text-lg line-clamp-2">
                {first.title}
              </p>
              <p className="text-gray-400 text-sm mt-2 line-clamp-3 max-w-[550px]">
                {first.description}
              </p>
            </div>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {second && (
            <Card
              key={second.id}
              onClick={() =>
                openModal({ title: second.title, src: second.src })
              }
              className="md:col-span-2 cursor-pointer group"
            >
              <div
                className="relative overflow-hidden border-2 border-[#FF1744] bg-black group-hover:opacity-90 transition"
                style={{ boxShadow: "0 0 20px rgba(255, 23, 68, 0.5)" }}
              >
                <div className="relative w-full h-[350px] md:h-[400px]">
                  <iframe
                    width="100%"
                    height="100%"
                    src={second.src}
                    title={second.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full pointer-events-none"
                  />
                  <div className="absolute inset-0 cursor-pointer" />
                </div>
              </div>

              <div className="py-4 h-[140px] overflow-hidden">
                <p className="text-gray-300 font-semibold text-lg line-clamp-2">
                  {second.title}
                </p>
                <p className="text-gray-400 text-sm mt-2 line-clamp-3 max-w-[550px]">
                  {second.description}
                </p>
              </div>
            </Card>
          )}

          {third && (
            <Card
              key={third.id}
              onClick={() => openModal({ title: third.title, src: third.src })}
              className="cursor-pointer group"
            >
              <div
                className="relative overflow-hidden border-2 border-[#FF1744] bg-black group-hover:opacity-90 transition"
                style={{ boxShadow: "0 0 20px rgba(255, 23, 68, 0.5)" }}
              >
                <div className="relative w-full h-[350px] md:h-[400px]">
                  <iframe
                    width="100%"
                    height="100%"
                    src={third.src}
                    title={third.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full pointer-events-none"
                  />
                  <div className="absolute inset-0 cursor-pointer" />
                </div>
              </div>

              <div className="py-4 h-[140px] overflow-hidden">
                <p className="text-gray-300 font-semibold text-lg line-clamp-2">
                  {third.title}
                </p>
                <p className="text-gray-400 text-sm mt-2 line-clamp-3 max-w-[550px]">
                  {third.description}
                </p>
              </div>
            </Card>
          )}
        </div>

        <Modal
          isOpen={!!selectedVideo}
          onClose={closeModal}
          title={selectedVideo?.title || ""}
          src={selectedVideo?.src || ""}
        />
      </div>
    </section>
  );
};
