"use client";

import { useState } from "react";
import { Modal } from "../Modal";
import { Card } from "./Card";

export const Gallery = () => {
  const videos = [
    {
      id: 1,
      title: "Stranger Things 5 | First Five Minutes | Netflix",
      src: "https://www.youtube.com/embed/vhFPHYgILN0",
      description: "Tráiler oficial de la temporada 5 de Stranger Things",
    },
    {
      id: 2,
      title: "Stranger Things 5 | Official Trailer | Netflix",
      src: "https://www.youtube.com/embed/PssKpzB0Ah0",
      description: "Evento de premiere de Stranger Things temporada 5",
    },
    {
      id: 3,
      title: "Stranger Things 5 | Official Teaser | Netflix",
      src: "https://www.youtube.com/embed/iKZyYdwS3Wg",
      description: "Entrevista con el elenco de Stranger Things temporada 5",
    },
  ];

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

  return (
    <section
      className="py-20 px-4 bg-black border-t-2 border-[#FF1744]"
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

        <div className="grid grid-cols-1 gap-12">
          {videos.map((video, index) => (
            <Card
              key={video.id}
              onClick={() => openModal({ title: video.title, src: video.src })}
              className={index === 0 ? "md:col-span-2" : ""}
            >
              <div className="relative overflow-hidden border-2 border-[#FF1744] bg-black">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-[#FF1744]/20 to-transparent transition-opacity duration-300"
                  aria-hidden="true"
                />
                <iframe
                  width="100%"
                  height="400"
                  src={video.src}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full"
                  loading="lazy"
                />
              </div>
              <div className="py-4">
                <p className="text-gray-300 font-semibold text-lg">
                  {video.title}
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  {video.description}
                </p>
              </div>
            </Card>
          ))}
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
