"use client";

import { Layout } from "@/components/Layout";
import React from "react";
import DeepSearch from "@/components/DeepSearch";

const DeepSearchPage = () => {
  return (
    <Layout title="PointIs: Independant Search">
      <section
        className="pb-4 pt-2 dark:bg-custom-dark"
        style={{
          height: "calc(100vh - 4rem)",
        }}
      >
        <DeepSearch onSearchActivated={() => {}} searchActivated={true} />
      </section>
    </Layout>
  );
};

export default DeepSearchPage;
