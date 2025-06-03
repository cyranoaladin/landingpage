"use client";
import React from "react";

export default function BackgroundContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full min-h-screen z-0">
      <div className="background-container fixed inset-0 w-full h-full z-0 pointer-events-none">
        <div className="background-image"></div>
        <div className="background-overlay"></div>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
