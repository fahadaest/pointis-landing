"use client";

import { Layout } from "@/components/Layout";
import React from "react";
import Link from "next/link";
import YouTube, { YouTubeProps } from "react-youtube";
import { postAnalytics } from "@/lib/utils";

const GetPage = () => {
  const opts: YouTubeProps["opts"] = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <Layout title="How to Download & Install">
      <section className="py-2 dark:bg-custom-dark">
        <div className="text-center w-4/5 mx-auto">
          <div className="pt-4 px-12 text-gray-500 md:text-l/relaxed lg:text-base/relaxed  xl:text-l/relaxed dark:text-gray-400">
            <div className="pb-5">
              <Link
                href="https://drive.google.com/uc?export=download&id=1uTHrfEwcLnSeGvq7PW2dkcRcP5kOCQsI"
                onClick={async () => {
                  await postAnalytics("get", "download", "lifecycle");
                }}
              >
                <u>Download</u>
              </Link>{" "}
              &gt; Unpack &gt; Add to Chrome &gt; Sign-in &gt; Enjoy!
            </div>
            <div className="py-4 pnt_install_video">
              <YouTube
                className="pnt_install_video_player"
                videoId="xatH3HHJGf4"
                opts={opts}
                // onReady={(event) => event.target.pauseVideo()}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetPage;
