"use client";

import React, { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { API_ROOT } from "@/components/shared";
import styles from "./unsub.module.css";
import { useSearchParams } from "next/navigation";
const UnsubscribePage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const emailQuery = searchParams?.get("e");
    if (emailQuery) {
      setEmail(emailQuery);
    }
  }, [searchParams]);

  const handleUnsubscribe = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      const response = await fetch(`${API_ROOT}/unsub`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) setMessage(data.message);
      else setMessage(data.error || "Something went wrong. Please try again.");
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <Layout title="Unsubscribe">
      <div className={`flex flex-col items-center justify-center min-h-[60vh] p-5 dark:bg-custom-dark`}>
        <img
          src="/images/unsub.png"
          alt="Unsubscribe"
          className={`max-h-[25vh] mb-5 rounded-full grayscale-[70%] w-auto mx-auto`}
        />
        <h1 className={`${styles.title} dark:text-white`}>
          Second chances?
          <br />
          or
        </h1>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleUnsubscribe().finally();
          }}
          className={`w-auto p-2 mb-12 text-lg rounded text-center dark:bg-lightGray dark:placeholder-white dark:!text-black`}
        />
        <button onClick={handleUnsubscribe} className="rounded-2xl bg-primary text-white p-3">
          Unsubscribe
        </button>
        {message && (
          <p
            className={`w-300 p-5 mb-2 rounded text-center text-lg text-gray-600; ${
              message.includes("error") ? `text-red-700` : ""
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </Layout>
  );
};

export default UnsubscribePage;
