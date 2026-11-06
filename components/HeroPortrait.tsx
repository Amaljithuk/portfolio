"use client";

import Image from "next/image";
import { useRef } from "react";
import { Award, Check, Spark } from "@/components/Icons";

export default function HeroPortrait() {
  const stageRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const stage = stageRef.current;
    if (!stage) return;

    const rect = stage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    stage.style.setProperty("--tilt-y", `${(x * 5).toFixed(2)}deg`);
    stage.style.setProperty("--tilt-x", `${(-y * 5).toFixed(2)}deg`);
  }

  function resetTilt() {
    const stage = stageRef.current;
    if (!stage) return;
    stage.style.setProperty("--tilt-y", "0deg");
    stage.style.setProperty("--tilt-x", "0deg");
  }

  return (
    <div
      className="portrait-stage"
      ref={stageRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      <div className="portrait-halo" aria-hidden="true" />
      <div className="portrait-dots" aria-hidden="true" />
      <div className="portrait-orbit portrait-orbit-one" aria-hidden="true" />
      <div className="portrait-orbit portrait-orbit-two" aria-hidden="true" />

      <div className="portrait-caption" aria-hidden="true">
        <span className="caption-line" />
        <span>Kasaragod · Kerala</span>
      </div>

      <div className="portrait-frame-wrap">
        <div className="portrait-frame">
          <Image
            src="/images/shafna-majeed.webp"
            alt="Portrait of Shafna Majeed"
            fill
            priority
            unoptimized
            sizes="(max-width: 760px) 78vw, (max-width: 1100px) 42vw, 430px"
            className="portrait-img"
          />
          <div className="portrait-vignette" aria-hidden="true" />
        </div>
      </div>

      <div className="float-card float-card-net">
        <span className="float-icon">
          <Check />
        </span>
        <span className="float-text">
          <strong>UGC-NET</strong>
          <small>Cleared · June 2012</small>
        </span>
      </div>

      <div className="float-card float-card-award">
        <span className="float-icon float-icon-gold">
          <Award />
        </span>
        <span className="float-text">
          <strong>Best Outgoing Student</strong>
          <small>M.Sc. · Nadar Saraswathi College</small>
        </span>
      </div>

      <div className="portrait-seal" aria-hidden="true">
        <svg viewBox="0 0 124 124" className="seal-ring">
          <defs>
            <path
              id="seal-circle"
              d="M62,62 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0"
            />
          </defs>
          <text>
            <textPath href="#seal-circle" startOffset="0%">
              COMPUTER SCIENCE · EDUCATION ·
            </textPath>
          </text>
        </svg>
        <span className="seal-center">
          <Spark />
          <strong>SM</strong>
        </span>
      </div>
    </div>
  );
}
