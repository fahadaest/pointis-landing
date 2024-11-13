"use client";

import React, { useEffect, useState } from "react";
import { Layout } from "@/components/Layout"; // Client component
import Markdown from "react-markdown";
import SmartEditor from "@pntis/shared-react";
import remarkGfm from "remark-gfm";
import removeMd from "remove-markdown";
import { API_ROOT } from "@/components/shared";
import { notFound } from "next/navigation";
import { postAnalytics } from "@/lib/utils"; // Use this to handle 404s in app router

type I = {
  sid: string;
  url: string;
  output: string;
  title: string;
  compression: number | null;
};

export default async function ShareLink({ params }: { params: { id: string } }) {

  // console.log("ItemView.render.start", params)
  const [error, setError] = useState(false)
  const [data, setData] = useState<I | null>(null);

  const { id } = params;

  useEffect(() => {
    async function fetchData() {
      postAnalytics("link", "view").finally();

      const response = await fetch(`${API_ROOT}/i/${id}`);
      if (!response.ok) {
        setError(true)
      }
      else {
        const result = await response.json();
        setData(result);
      }
    }
    fetchData();
  }, []);
  // Fetch the data server-side

  // console.log("ItemView.render", error, data)

  if (error) return notFound();
  // if(!data) return null;

  let description = data?.output ? removeMd(data.output).substring(0, 200) + "..." : null;

  return (
    // <div>Hey</div>
    // Use the Layout component (client-side)
    <Layout
      title={data?.title ? `Summarized "${data?.title}"` : "No Summary Found"}
      description={description}
    >
      <section
        className="dark:bg-custom-dark "
        style={{ minHeight: "calc(100vh - 120px)" }}
      >
        <div className="space-y-4 pb-5 ">
          {data?.compression && (
            <h2 className="text-center text-xl tracking-tighter sm:text-xl md:text-2xl dark:text-white">
              This summary saves you ~
              {(
                (data.output.length / 5 / 100) *
                Math.max(1, data.compression - 1)
              ).toFixed(0)}{" "}
              mins.
            </h2>
          )}
          {data?.url && (
            <>
              <div className="pnt_content px-12 text-gray-500 md:text-xl/relaxed md:px-35 lg:text-xl/relaxed lg:px-30 xl:text-xl/relaxed xl:px-40 dark:text-gray-400">
                <b>Source:</b>
                <a href={data.url} className="px-1">
                  <u>{data?.title}</u>
                </a>
              </div>
            </>
          )}
          <div className="pnt_content pt-4 px-12 text-gray-500 md:text-xl/relaxed md:px-35 lg:text-xl/relaxed lg:px-30 xl:text-xl/relaxed xl:px-40 dark:text-gray-400">
            <SmartEditor
              content={data ? data.output : "Loading..."}
              editing={false} // Set to true if you want to enable editing
              noActions={true} // Hides action toolbar if no actions are needed
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
