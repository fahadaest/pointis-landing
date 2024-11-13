"use client";

import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen dark:bg-custom-dark">
      <Player
        autoplay
        loop
        src="/lottie/loading.json"
        style={{ height: "300px", width: "300px" }}
      ></Player>
    </div>
  );
}
