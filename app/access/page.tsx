// components/HeroSection.js
'use client';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="">
      <div className="relative bg-white bg-cover bg-center">
        {/* <div className="fixed inset-0 bg-black opacity-20"></div> */}
        <div className="relative z-10 hidden h-full justify-center border py-8 text-center leading-tight text-black">
          <p className="text-md mb-2 text-neutral-600">
            Complete three <span className="underline">free steps</span> to unlock*
          </p>
          <h1 className="mb-4 text-4xl font-bold text-black">
            Up to 62,500 V-
            <br />
            Bucks Worth Of
            <br /> Reward Access^
          </h1>
          <button className="rounded-full bg-blue-600 px-6 py-3 text-xl font-semibold text-white">Get Access Now! </button>
        </div>{' '}
        <div className="relative z-10 mx-6 h-full justify-center py-8 text-center leading-tight text-black">
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
            <h1 className="pb-8 text-4xl font-bold text-black">Enter your Epic userame</h1>
            <label htmlFor="platform" className="mb-2 block font-medium">
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
            <label htmlFor="username" className="mb-2 block font-medium">
              Enter your Fortnite username:
            </label>
            <Input id="username" type="text" placeholder="Enter your username" className="w-full" />
          </div>
          <Link href="/vbucks/tiktok" className="rounded-full bg-blue-600 px-6 py-3 text-xl font-semibold text-white">
            Continue
          </Link>

          {/* <Button className="w-full bg-[#ff4b4b] hover:bg-[#e63d3d] text-white font-bold py-2 px-4 rounded">Generate V-Bucks</Button> */}
          <div className="mt-4 text-center text-sm text-[#999999]">
            <p>This is a fictional generator and does not actually provide free V-Bucks. Please do not attempt to use this for real.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
