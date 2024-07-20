"use client";
import Image from "next/image";

export default function AccessVbucks() {
  const router = "REPLACE ME";

  return (
    <div className="isolate relative h-80 -z-10 overflow-hidden">
      <Image src="/fn.jpg" className="h-80  object-cover object-center" alt="reward" width={2048} height={2048}></Image>
      <Image
        src="/vb2.png"
        className="hidden absolute fit rounded-xl w-48  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
"
        alt="reward"
        width={340}
        height={238}
      ></Image>
    </div>
  );
}
