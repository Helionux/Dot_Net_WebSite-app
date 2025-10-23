import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function Navbar() {
  return (
    <header className=" w-full h-[965px] top-0 flex justify-center ">
      <div className="fixed flex items-center top-4 gap-[2x] w-[1040px] h-[42px] left-[100px] justify-between">
        {/* Logo (left) */}
        <div className=" ">
          <Link href="/" className="text-lg font-bold inline-flex items-center">
            <Image src="/logo.png" alt="Logo" width={72} height={34} />
          </Link>
        </div>

        {/* Centered Navigation */}

        <nav className="flex-1 justify-center gap-[24px] flex text-sm font-lenx  ">
          <Link href="/" className="font-bold">Home</Link>
          <Link href="/event">Events</Link>
          <Link href="/about">About us</Link>
          <Link href="/project">Projects</Link>
          <Link href="/resource">Resources</Link>
        </nav>

        

        <div className="font-spaceGrotesk font-bold flex items-center ">
          <Button variant={'outline'}>Contact-us</Button>
          <div className="flex items-center ml-2 cursor-pointer font-space-grotesk font-w leading-[160%] text-center tracking-[0%">
            <span>English</span>
            <ChevronDown className="ml-1"/>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-2">
        <div className="bg-red-700">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem facilis ullam nisi. Sit modi quasi recusandae explicabo sed beatae, aperiam tempora, pariatur quaerat reprehenderit debitis placeat voluptates suscipit delectus.</p>
        </div>
        <div className="bg-blue-300"></div>
      </div>

    </header>
  );
}