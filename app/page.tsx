// components/HeroSection.js

'use client';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="">
      <div className="h-full w-full bg-gradient-to-br from-blue-400 to-cyan-100 bg-cover bg-center py-4">
        {/* <div className="mx-auto h-8 w-fit">
          <a href="#" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold text-blue-200 dark:text-white">OnlyforG</span>
          </a>
          <br />
        </div> */}
        <div className="relative z-10 h-96 h-full justify-center text-center text-black">
          <p className="text-md mb-2 text-zinc-900">
            Complete two <span className="underline">free steps</span> to unlock*
          </p>
          <h1 className="px-4 text-2xl font-bold leading-7 text-zinc-900">Up to 62,500 V-Bucks Worth Of Reward Access^</h1>
          {/* <div className="flex gap-2 overflow-hidden">
            <Image src="/fortnite-2800.jpg" className="fit mx-auto my-2 w-36 rounded-lg shadow-xl" alt="reward" width={673} height={973}></Image>
          </div> */}
          <div className="bg-blue relative mx-auto my-4 h-56 w-80 overflow-hidden rounded-xl bg-[#6cd4fc] shadow-xl">
            <Image src="/vb-bg.avif" className="absolute top-0 -ml-48 max-w-lg brightness-110" alt="reward" width={1800} height={900} priority></Image>
            <h3 className="absolute right-2 top-4 z-20 text-right text-3xl font-bold text-white">
              62,500 V-
              <br />
              Bucks*
            </h3>
            <h3 className="absolute bottom-2 right-2 z-20 text-right text-xl text-white">Worth $500</h3>
          </div>
          {/* <Link href="vbucks/access" className="px-6  block mx-4 py-4 text-2xl font-semibold rounded-full text-white bg-blue-600">
            Get Started!{" "}
          </Link> */}
          <div className="px-10 text-center font-sans text-xs leading-4 text-zinc-600">
            <p>
              Trade names or rights associated with all brands on this site are the property of their respective owners and are not affiliated with this promotion. <br />
              <strong>*Upon completion two steps such as reaching certain level in free games.</strong> ^Receive access to $500 Gift Card promotions.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 h-full justify-center bg-white px-6 py-8 text-center leading-tight text-black">
        <div className="mb-6">
          <h1 className="pb-8 text-2xl font-bold text-black">Enter Your Epic Username To Get Started</h1>
          <label htmlFor="platform" className="mb-2 block font-semibold">
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
          <label htmlFor="username" className="text-md mb-2 block font-semibold">
            Enter your username:
          </label>
          <Input id="username" type="text" placeholder="Epic username.." className="text-md w-full" />
        </div>
        {/* <h1 className="pb-8 text-4xl font-bold text-black">Do you Play Fortnite everyday?</h1> */}

        <Link href="/tiktok" className="my-6 block w-full rounded-full bg-blue-600 px-6 py-3 text-xl font-semibold text-white">
          Continue
        </Link>

        {/* <Button className="w-full bg-[#ff4b4b] hover:bg-[#e63d3d] text-white font-bold py-2 px-4 rounded">Generate V-Bucks</Button> */}
        <div className="mt-4 text-center text-sm text-black">
          <p>
            By clicking &quot;Continue&quot; button you agree with{' '}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link href="/tos" className="underline">
              Terms
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
