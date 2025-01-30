"use client";
import { Quotes } from "@phosphor-icons/react";
import React, { useEffect, useRef, useState } from "react";

const Quote = ({ quote }: { quote: string }) => {
  const containerRef = useRef(null);
  const [opacity, setOpacity] = useState(0);
  const [translateY, setTranslateY] = useState(50);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.intersectionRatio >= 0.2 &&
            entry.intersectionRatio <= 0.7
          ) {
            const ratio = Math.min((entry.intersectionRatio - 0.2) / 0.5, 1);
            setOpacity(ratio);
            setTranslateY(50 - ratio * 50);
          } else if (entry.intersectionRatio > 0.7) {
            setOpacity(1);
            setTranslateY(0);
          } else {
            setOpacity(0);
            setTranslateY(50);
          }
        });
      },
      {
        threshold: [0, 0.2, 0.3, 0.5, 0.7, 1],
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      className="h-[100vh] flex justify-center items-center"
      ref={containerRef} // Attach the ref to the entire container
      style={{
        opacity, // Apply dynamic opacity to the whole container
        transform: `translateY(${translateY}px)`, // Apply vertical movement (slide up)
        transition: "opacity 1s ease-out, transform 1s ease-out", // Slow transition for opacity and transform
      }}
    >
      <div className="flex flex-col justify-center items-center w-[70%]">
        <div className="w-[110%] md:w-[102%]">
          <Quotes size={40} color="orange" />
        </div>
        <div className="font-subtext-mont italic text-xl text-textBrown">
          {quote}
        </div>
      </div>
    </div>
  );
};

export default Quote;
