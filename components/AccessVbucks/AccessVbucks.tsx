'use client';
import Image from 'next/image';

export default function AccessVbucks() {
  const router = 'REPLACE ME';

  return (
    <div className="relative isolate -z-10 h-80 overflow-hidden">
      <Image src="/fn.jpg" className="h-80 object-cover object-center" alt="reward" width={2048} height={2048}></Image>
      <Image src="/vb2.png" className="fit absolute left-1/2 top-1/2 hidden w-48 -translate-x-1/2 -translate-y-1/2 transform rounded-xl" alt="reward" width={340} height={238}></Image>
    </div>
  );
}
