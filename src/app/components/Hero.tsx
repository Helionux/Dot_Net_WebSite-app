import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function Navbar() {
  return (
    <header className=" max-w-6xl mx-auto">
        <div className=" flex items-center gap-[2px] w-full justify-between z-10 bg-white/95 px-4 ">
          {/* Logo (left) */}
          <div className=" ">
            <Link href="/" className="text-lg font-bold inline-flex items-center">
              <Image src="/logo.png" alt="Logo" width={72} height={34} />
            </Link>
          </div>

          {/* Centered Navigation */}
          <nav className=" justify-center gap-[24px] flex text-sm font-lenx">
            <Link href="/" className="font-bold">Home</Link>
            <Link href="/event">Events</Link>
            <Link href="/about">About us</Link>
            <Link href="/project">Projects</Link>
            <Link href="/resource">Resources</Link>
          </nav>

          <div className="flex items-center font-grotesk">
            <Button variant={'outline'}>Contact-us</Button>
            <div className="flex items-center ml-2 cursor-pointer font-space-grotesk leading-[160%] text-center tracking-[0%">
              <span>English</span>
              <ChevronDown className="ml-1"/>
            </div>
          </div>
        </div>

      <div className="mt-16  grid grid-cols-2 items-center">
        {/* Right */}
        <div className="max-w-[600px]">
          <span className="border rounded-[24px] p-1 leading-[120%] font-light font-lenx size-[6px] w-fit">Must-attend tech event for the Microsoft Ecosystem in Cameroon</span>
          <h1 className="font-grotesk font-bold leading-[110%] tracking-[-8%] text-[44px] mt-0.5 ">
            .NET Community Conference 2025 | 8th edition
          </h1>
          <p className="font-light font-lenx leading-[140%] tracking-normal">
            Join hundreds of passionate developers for a day dedicated to the .NET ecosystem. Share your experiences and let&apos;s build the future of development together.
          </p>

          
          <div className="flex  mt-[35px]">
            <div className="pr-4 ">
              <span className="text-[18px] leading-[160%] tracking-normal text-[#512BD4] font-bold">100 places</span>
              <p className="font-lenx font-light text-[14px] leading-[120%]">Available</p>
            </div>
             <div className="border-l-2 px-4">
              <span className="text-[18px] leading-[160%] tracking-normal text-[#512BD4] font-bold  ">Black coffee</span>
              <p className="font-lenx font-light text-[14px] tracking-normal leading-[120%]">Location</p>
            </div>
            <div className=" border-l-2 px-4">
              <span className="text-[18px] leading-[160%] tracking-normal text-[#512BD4] font-bold">+12</span>
              <p className="font-lenx font-light text-[14px] leading-[120%]">Speakers</p>
            </div>
          </div>

          {/* Button */}
          <div className="gap-3 flex">
            <Button className="mt-8 bg-[#0A855F] text-white hover:bg-[#4219b8] px-[24px] py-[14px] w-[195px] h-[54px] rounded-[13px] font-grotesk font-bold text-[13px] leading-[160%] tracking-normal text-center ">
              Subscribe to event
            </Button>
            <Button className="mt-8 bg-[#FFFFFF] text-black hover:bg-[#FFFFFF] border border-[#DDDDDD] px-[24px] py-[14px] w-[140px] h-[54px] rounded-[13px] font-grotesk font-bold text-[13px] gap-[10px] leading-[160%] tracking-normal text-center ">
              Share event
            </Button>
          </div>
        </div>
        {/* Left */}
        <div className=" flex justify-end">
          <div className="border" >
            <div className="">
              <div className="bg-[#512BD4] w-[120px] h-[31px] rounded-[12px] px-[20px] py-[10px] border border-2 borer-[4px] border-[#FFFFFF] border-[4px]text-[16px] leanding-[160%] text-black tracking-[-4%] font-grotesk font-bold text-white items-center justify-center rotate-4 flex">
                Time left
              </div>
            </div>

            <div className="bg-[#E1A325] w-[340px] h-[65px] rounded-[12px] p-[20px] flex items-center ">
              <h1 className="text-[30px] font-grotesk font-bold leading-[110%] tracking-[-8%] text-center align-center text-[#2D2006]">2 Days : <span className="font-light text-[30px] leading-[160%]  tracking-[-1.55%]"> 12 min : 33 s</span></h1>
            </div>

            <div className="flex justify-end ">
              <div className="bg-[#0A855F] w-[226px] h-[31px] text-white z-12 rounded-[12px] border border-2 border-white z-55 font-grotesk text-[16px] leading-[160%]tracking-normal items-center text-center justify-center -rotate-6 font-grotesk">Date <span className="font-bold">November 12, 2025</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div>
          <Image src="/image_1.png" alt="Hero Image" width={1440} height={500} />
        </div>
        <div>
          <Image src="/image_1.png" alt="Hero Image" width={200} height={62} />
        </div>
        <div>
          <Image src="/image_1.png" alt="Hero Image" width={1440} height={500} />
        </div>
        <div>
          <Image src="/image_1.png" alt="Hero Image" width={1440} height={500} />
        </div>
        <div>
          <Image src="/image_1.png" alt="Hero Image" width={1440} height={500} />
        </div>
        <div>
          <Image src="/image_1.png" alt="Hero Image" width={1440} height={500} />
        </div>
        <div>
          <Image src="/image_1.png" alt="Hero Image" width={1440} height={500} />
        </div>
        <div>
          <Image src="/image_1.png" alt="Hero Image" width={1440} height={500} />
        </div>
        <div>
          <Image src="/image_1.png" alt="Hero Image" width={1440} height={500} />
        </div>
      </div>
    </header>
  );
}