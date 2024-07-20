// components/HeroSection.js

"use client";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="">
      <div className="h-full  bg-cover bg-center w-full ">
        <div className="block mx-auto w-fit">
          {/* <a href="https://flowbite.com" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-blue-200 dark:text-white">OnlyforG</span>
          </a> */}
          <br />
        </div>
        <div className="relative h-96   z-10  text-center   justify-center h-full text-black">
          <p className="text-md  text-white ">
            Complete two <span className="underline">free steps</span> to unlock*
          </p>
          <h1 className="text-2xl px-4  leading-tight font-bold  text-white">Up to 62,500 V-Bucks Worth Of Reward Access^</h1>
          <div className="flex overflow-hidden gap-2">
            <Image src="/fortnite-2800.jpg" className="mx-auto  fit rounded-lg shadow-xl w-36 my-2" alt="reward" width={673} height={973}></Image>
          </div>
          {/* <Link href="vbucks/access" className="px-6  block mx-4 py-4 text-2xl font-semibold rounded-full text-white bg-blue-600">
            Get Started!{" "}
          </Link> */}
          <div className=" text-center font-sans px-8 leading-3 font-thin text-xs  text-zinc-200">
            <p>
              Trade names or rights associated with all brands on this site are the property of their respective owners and are not affiliated with this promotion. *Upon completion two steps such as
              reaching certain level in free games. ^Receive access to $500 Gift Card promotions.
            </p>
          </div>
        </div>
      </div>
      <div className=" relative mx-6 z-10  text-center leading-tight  justify-center h-full text-black">
        {/* <p className="text-md text-neutral-600 mb-2">
          Complete three <span className="underline">free steps</span> to unlock*
        </p> */}
        {/* <h1 className="text-4xl font-bold  text-black mb-4">
          Up to 62,500 V-
          <br />
          Bucks Worth Of
          <br /> Reward Access^
        </h1> */}
        <div className="mb-6">
          {/* <h1 className="text-4xl font-bold  text-black pb-8">Enter your Epic userame</h1> */}
          <label htmlFor="platform" className="block font-medium mb-2">
            Select your platform:
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pc">PC</SelectItem>
              <SelectItem value="xbox">Xbox</SelectItem>
              <SelectItem value="playstation">PlayStation</SelectItem>
              <SelectItem value="nintendo">Nintendo Switch</SelectItem>
              <SelectItem value="mobile">Mobile</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-6">
          <label htmlFor="username" className="block font-medium mb-2">
            Enter your Fortnite username:
          </label>
          <Input id="username" type="text" placeholder="Enter your username" className="w-full" />
        </div>
        <Link href="/vbucks/tiktok" className="px-6 block w-full py-3 my-6 text-xl font-semibold rounded-full text-white bg-blue-600">
          Continue
        </Link>

        {/* <Button className="w-full bg-[#ff4b4b] hover:bg-[#e63d3d] text-white font-bold py-2 px-4 rounded">Generate V-Bucks</Button> */}
        <div className="mt-4 text-center  text-sm text-[#999999]">
          <p>By clicking "Continue" button you agree with Privacy Policy and Terms.</p>
        </div>
      </div>
    </div>
  );
}
