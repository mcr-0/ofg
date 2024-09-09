"use client";
import { useEffect, useState } from "react";

import Starfield from "react-starfield";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";
type Offer = {
  offerid: string;
  name: string;
  name_short: string;
  description: string;
  adcopy: string;
  picture: string;
  payout: string;
  country: string;
  device: string;
  link: string;
  epc: string;
  boosted: boolean;
  ctype: string;
  cvr: string;
};

export default function Home() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.sa_event && window.sa_event("click_receive");
    console.log("test");
    const fetchOffers = async () => {
      try {
        const response = await fetch("/api/fetchOffers");
        if (!response.ok) {
          throw new Error("Failed to fetch offers");
        }
        const data = await response.json();
        if (data.error) {
          setError(data.error);
        } else {
          setOffers(data.offers);
        }
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchOffers();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (offers.length === 0) {
    return <p className="min-h-screen text-center">Loading...</p>;
  }
  window.sa_event && window.sa_event("click_receive");
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
            <span className="animate-pulse text-green-400">
              You are eligible
            </span>
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
          0/1 Completed
        </h1>
        <p className="text-left text-lg leading-6 tracking-tight text-white">
          If you already have TikTok app installed, please use another device.
        </p>
      </header>
      <div className="mb-4 w-full rounded-2xl border bg-blue-400/80 p-3">
        <div className="text-center">
          <p className="mb-4 hidden font-bold text-red-500">
            Check if you are eligible
          </p>
          <Image
            src="/fortnite_v2.png"
            className="hidden px-20"
            width={1000}
            height={1000}
            alt=""
          />

          <div className="mx-auto w-full px-2 text-left text-blue-950 md:flex-nowrap">
            <h1 className="mb-4 mt-4 text-center text-2xl font-bold">
              Download & Sign Up
            </h1>
            <div className="space-y-4">
              {offers
                .filter((offer) => offer.boosted)
                .slice(0, 1)
                .map((offer) => (
                  <a
                    key={offer.offerid}
                    href={offer.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="0 flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 p-4 shadow-md transition-all hover:bg-gradient-to-r"
                  >
                    <img
                      src={offer.picture}
                      alt={offer.name}
                      className="mr-4 h-16 w-16 rounded-full object-cover"
                    />
                    <div>
                      <h2 className="text-lg font-semibold text-white">
                        {offer.name_short}
                      </h2>
                      <p className="text-sm text-white">
                        *New Users Only! Create a NEW* TikTok acccount & Follow
                        Us @mazerewards
                      </p>
                    </div>
                  </a>
                ))}
            </div>
            <h1 className="mb-4 mt-6 text-center text-sm font-semibold">
              99% of users complete this step <br />
              in less than <u>5 minutes</u>!
            </h1>
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
