"use client";
import Starfield from "react-starfield";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { use } from "react";
export default function Home() {
  const saEvent = (eventName: string) => {
    if (typeof window !== "undefined" && window.sa_event) {
      window.sa_event(eventName);
      console.log(eventName);
    } else {
      console.log("error");
    }
  };
  const handleReceiveButton = () => {
    saEvent("click_receive_test");
    window.location.href = "./offer";
    console.log("click received");
  };

  return (
    <div className="App mx-auto flex min-h-screen max-w-xl flex-col p-4">
      <Starfield
        starCount={10000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />

      <header className="z-50 mx-auto max-w-lg p-3 text-center sm:px-6 lg:px-8">
        <div className="justify-left mb-2 flex items-center space-x-2 text-center text-xl text-black">
          <div className="">
            <span className="animate-pulse">Status: </span>
            <span className="animate-pulse text-green-400">Available</span>
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="10" r="10" fill="#8FFF00" />
            <path
              d="M5 10L8.5 13.5L14.5 6.5"
              stroke="#1E1E1E"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        <h1 className="mb-2 text-left text-4xl font-black tracking-tighter text-white">
          Two steps to G rewards
        </h1>
        <p className="text-left text-lg leading-6 tracking-tight text-white">
          Boosted G Rewards are on the horizon. To qualify for double boosted G
          rewards, complete the following steps. Terms and restrictions apply.
        </p>
      </header>
      <div className="mb-4 w-full rounded-2xl border bg-blue-400/80 p-3">
        <div className="text-center">
          <p className="mb-4 hidden font-bold text-red-500">
            Check if you are eligible
          </p>
          <Image
            src="/fortnite_v2.png"
            className="px-20"
            width={400}
            height={300}
            alt=""
            priority
          />

          <div className="mx-auto w-full px-2 text-left text-blue-950 md:flex-nowrap">
            <h1 className="mb-4 mt-4 text-center text-2xl font-bold">
              Enter your Epic username
            </h1>
            <div className="mb-4 flex items-center space-x-2">
              <Input
                type="email"
                className="text-md h-12 border-2 bg-white text-black"
                placeholder="@username"
              />
              <Link href="#" onClick={handleReceiveButton}>
                <Button type="submit" className="h-12">
                  Receive
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full px-10 text-center text-xs text-white">
        <p className="">
          Use of any logos or trademarks are for reference purposes only. By
          using the website, you agree to our{" "}
          <Link href="/terms" target="_blank" className="text-white underline">
            Terms
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            target="_blank"
            className="text-white underline"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
