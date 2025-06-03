"use client";

import { motion, useAnimation, useTime, useTransform } from "framer-motion";
import { useEffect } from "react";
import { DIAGRAM_SIZE, RADIUS, angleOffset, stepsData } from "./constants";
import OrbitalStep from "./OrbitalStep";

export default function ActivationLoopDiagram() {
  const stepHighlightControls = useAnimation();
  const time = useTime();

  const orbitalRotation = useTransform(time, [0, 30000], [0, 360], { clamp: false });
  const counterRotation = useTransform(time, [0, 30000], [0, -360], { clamp: false });

  // NOUVEL ORDRE VISUEL DÉDUIT DE LA CAPTURE D'ÉCRAN 09:36:47 :
  // En partant du bas (angleOffset = -PI/2) et dans le sens horaire.
  const visualSlotOrder = ["Learn", "Build", "Prove", "Activate", "Scale"];

  useEffect(() => {
    let mounted = true;
    const loop = async () => {
      while (mounted) {
        for (let i = 0; i < stepsData.length; i++) {
          if (!mounted) break;
          const currentTitle = stepsData[i].title;
          await stepHighlightControls.start(
            (custom) => {
              if (custom === currentTitle) {
                return { scale: 1.2, zIndex: 10, opacity: 1 };
              }
              return { scale: 1, zIndex: 1, opacity: 0.85 };
            },
            { duration: 0.4 }
          );
          await new Promise((res) => setTimeout(res, 1200));
        }
      }
    };
    loop();
    return () => {
      mounted = false;
    };
  }, [stepHighlightControls]);

  const diagramDisplaySize = DIAGRAM_SIZE + 100;

  return (
    <section
      className="flex flex-col items-center justify-center py-16 bg-gradient-to-b from-[#0B0B0F] to-[#181825] text-white"
      style={{
        width: `${diagramDisplaySize}px`,
        height: `${diagramDisplaySize}px`,
        margin: "0 auto",
        isolation: "isolate"
      }}
    >
      <div
        className="relative flex items-center justify-center"
        style={{
          width: `${DIAGRAM_SIZE}px`,
          height: `${DIAGRAM_SIZE}px`,
          transform: "translate(-75px, -65px)" // Décalage global pour centrer l'ensemble
        }}
      >
        <motion.svg
          className="absolute z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          width={DIAGRAM_SIZE}
          height={DIAGRAM_SIZE}
          viewBox={`0 0 ${DIAGRAM_SIZE} ${DIAGRAM_SIZE}`}
          style={{ opacity: 0.5 }}
          initial={{ strokeDashoffset: 0 }}
          animate={{
            strokeDashoffset: [0, -Math.PI * RADIUS * 0.4],
            transition: { duration: 5, repeat: Infinity, ease: "linear" }
          }}
        >
          <defs>
            <linearGradient id="trailGradientDesktopFixed" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9945FF" stopOpacity="0.8" />
              <stop offset="25%" stopColor="#14F195" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#19AFFF" stopOpacity="0.8" />
              <stop offset="75%" stopColor="#FF6B95" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFD166" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <circle
            cx={DIAGRAM_SIZE / 2}
            cy={DIAGRAM_SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="url(#trailGradientDesktopFixed)"
            strokeWidth={4}
            strokeDasharray="5,10"
            strokeLinecap="round"
          />
        </motion.svg>

        <motion.div
          className="absolute left-1/2 top-1/2"
          style={{
            width: DIAGRAM_SIZE,
            height: DIAGRAM_SIZE,
            rotate: orbitalRotation,
            transform: "translate(-50%, -50%)",
            transformOrigin: "center center"
          }}
        >
          {stepsData.map((step) => {
            const visualSlotIndex = visualSlotOrder.indexOf(step.title);
            if (visualSlotIndex === -1) {
              console.warn(`Étape "${step.title}" non trouvée dans visualSlotOrder. Elle ne sera pas affichée.`);
              return null; 
            }

            // angleOffset est défini dans constants.ts (-Math.PI / 2, soit le bas du cercle)
            // On soustrait pour aller dans le sens horaire.
            const angle = angleOffset - (visualSlotIndex / stepsData.length) * 2 * Math.PI;
            const x = DIAGRAM_SIZE / 2 + RADIUS * Math.cos(angle);
            const y = DIAGRAM_SIZE / 2 + RADIUS * Math.sin(angle);
            return (
              <div
                key={step.title}
                className="absolute"
                style={{
                  left: x,
                  top: y,
                  transform: "translate(-50%, -50%)"
                }}
              >
                <OrbitalStep
                  step={step}
                  controls={stepHighlightControls}
                  index={visualSlotIndex} 
                  counterRotation={counterRotation}
                />
              </div>
            );
          })}
        </motion.div>

        <motion.div
          className="absolute z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="w-28 h-28 rounded-full bg-[#0B0B0F] border-2 border-white/30 shadow-[0_0_60px_rgba(153,69,255,0.5)] flex items-center justify-center">
            <div className="text-white font-orbitron font-bold text-center leading-tight">
              <p className="text-xs text-[#14F195]">Cognitive</p>
              <p className="text-base">Activation</p>
              <p className="text-xs text-[#9945FF]">Protocol™</p>
            </div>
          </div>
        </motion.div>

        <div className="flex md:hidden flex-row items-start justify-start w-full overflow-x-auto py-6 px-4 gap-x-6 snap-x snap-mandatory">
          {/* ... contenu mobile inchangé pour le moment ... */}
        </div>
      </div>
    </section>
  );
}

